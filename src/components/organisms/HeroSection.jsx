import { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import StatCard from "@/components/molecules/StatCard";
import { cvService } from "@/services/api/cvService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";

const HeroSection = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPersonalInfo = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await cvService.getPersonalInfo();
      setPersonalInfo(data);
    } catch (err) {
      setError("Failed to load personal information");
      console.error("Error loading personal info:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPersonalInfo();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadPersonalInfo} />;
  if (!personalInfo) return null;

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-bottle-green-50 to-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-6 mb-12 section-reveal">
            <h1 className="text-4xl md:text-6xl font-plus-jakarta font-bold text-gray-900">
              Hi, I'm{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-inter font-medium text-bottle-green-700">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {personalInfo.summary}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 section-reveal">
            <StatCard label="Experience" value={personalInfo.stats.experience} />
            <StatCard label="Projects" value={personalInfo.stats.projects} />
            <StatCard label="Technologies" value={personalInfo.stats.technologies} />
            <StatCard label="Passion" value={personalInfo.stats.passion} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 section-reveal">
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-bottle-green-600 to-bottle-green-700 text-white rounded-lg hover:from-bottle-green-700 hover:to-bottle-green-800 transition-all duration-300 hover:scale-105 hover:shadow-xl font-medium"
            >
              <ApperIcon name="Mail" className="w-5 h-5" />
              Get In Touch
            </button>
            
            <button
              onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-8 py-4 border border-bottle-green-600 text-bottle-green-600 rounded-lg hover:bg-bottle-green-50 transition-all duration-300 hover:scale-105 font-medium"
            >
              <ApperIcon name="Folder" className="w-5 h-5" />
              View My Work
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 section-reveal">
            <div className="flex justify-center">
              <button
                onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
                className="text-bottle-green-600 hover:text-bottle-green-700 transition-colors animate-bounce"
              >
                <ApperIcon name="ChevronDown" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;