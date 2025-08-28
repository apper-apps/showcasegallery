import { useState, useEffect } from "react";
import EducationCard from "@/components/molecules/EducationCard";
import { cvService } from "@/services/api/cvService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const EducationSection = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadEducation = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await cvService.getEducation();
      setEducation(data);
    } catch (err) {
      setError("Failed to load education information");
      console.error("Error loading education:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEducation();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadEducation} />;
  if (!education || education.length === 0) return <Empty title="No education data" />;

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-plus-jakarta font-bold gradient-text mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bottle-green-600 to-bottle-green-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            My academic journey combining business administration with technical expertise
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={edu.Id} className={`section-reveal`} style={{animationDelay: `${index * 0.1}s`}}>
              <EducationCard education={edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;