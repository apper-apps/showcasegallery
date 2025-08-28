import { useState, useEffect } from "react";
import ExperienceCard from "@/components/molecules/ExperienceCard";
import { cvService } from "@/services/api/cvService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const ExperienceSection = () => {
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadExperience = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await cvService.getExperience();
      setExperience(data);
    } catch (err) {
      setError("Failed to load experience information");
      console.error("Error loading experience:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadExperience();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadExperience} />;
  if (!experience || experience.length === 0) return <Empty title="No experience data" />;

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-plus-jakarta font-bold gradient-text mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bottle-green-600 to-bottle-green-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Hands-on experience through internships and practical learning opportunities
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={exp.Id} className={`section-reveal`} style={{animationDelay: `${index * 0.1}s`}}>
              <ExperienceCard experience={exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;