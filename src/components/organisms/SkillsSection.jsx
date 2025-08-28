import { useState, useEffect } from "react";
import SkillBar from "@/components/molecules/SkillBar";
import { cvService } from "@/services/api/cvService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const SkillsSection = () => {
  const [skillsByCategory, setSkillsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadSkills = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await cvService.getSkillsByCategory();
      setSkillsByCategory(data);
    } catch (err) {
      setError("Failed to load skills information");
      console.error("Error loading skills:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadSkills} />;
  if (!skillsByCategory || Object.keys(skillsByCategory).length === 0) {
    return <Empty title="No skills data" />;
  }

  // Get category colors
  const getCategoryColor = (index) => {
    const colors = [
      "from-bottle-green-600 to-bottle-green-500",
      "from-bottle-green-700 to-bottle-green-600",
      "from-bottle-green-500 to-bottle-green-400",
      "from-bottle-green-800 to-bottle-green-700",
      "from-bottle-green-600 to-bottle-green-500"
    ];
    return colors[index % colors.length];
  };

  return (
<section id="skills" className="py-20 bg-gradient-to-br from-bottle-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-plus-jakarta font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bottle-green-600 to-bottle-green-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Comprehensive technical proficiencies across web development, WordPress ecosystem, 
            cloud operations, and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <div 
              key={category} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover-lift section-reveal"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              <div className="mb-6">
                <h3 className="text-xl font-plus-jakarta font-semibold text-gray-900 mb-2">
                  {category}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${getCategoryColor(categoryIndex)} rounded-full`}></div>
              </div>

<div className="space-y-4">
                {skills.map((skill, skillIndex) => {
                  // Ensure skill is an object and has required properties
                  if (!skill || typeof skill !== 'object') {
                    console.warn(`Invalid skill object at index ${skillIndex} in category ${category}`);
                    return null;
                  }
                  
// Generate guaranteed unique key by always including skillIndex
                  // This prevents duplicate keys even if skill.id values are duplicated
                  const uniqueKey = skill.id 
                    ? `${category}-${skill.id}-${skillIndex}` 
                    : `${category}-skill-${skillIndex}-${Math.random().toString(36).substr(2, 9)}`;
                  
                  return (
                    <SkillBar 
                      key={uniqueKey} 
                      skill={{
                        name: skill.name || 'Unknown Skill',
                        level: typeof skill.level === 'number' ? skill.level : 0,
                        ...skill
                      }} 
                      animated={true}
                      className={`section-reveal`}
                      style={{animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`}}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-bottle-green-600 to-bottle-green-700 rounded-2xl p-8 text-white section-reveal">
<h3 className="text-2xl font-plus-jakarta font-semibold mb-4">
              Comprehensive Technical Expertise
            </h3>
            <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
              Diverse skill set spanning multiple domains of modern web development and digital product creation, 
              with expertise in both cutting-edge technologies and established enterprise solutions.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                {
                  title: "Web Development & Engineering",
                  skills: ["Full-Stack Development (HTML5, CSS3, Python)", "API Integration (Google APIs, Third-party Services)", "Game Development (Web-based Logic, HTML Canvas)", "Browser Extension Development", "Modern CSS (Tailwind CSS, Responsive Design)"]
                },
                {
                  title: "WordPress & CMS Development", 
                  skills: ["WordPress Theme & Plugin Development", "Custom Gutenberg Blocks", "E-commerce Solutions", "University & Educational Websites", "Hotel & Portfolio Websites"]
                },
                {
                  title: "Cloud & DevOps Operations",
                  skills: ["Version Control (Git, GitHub)", "Web Hosting & DNS Management", "Cloud Hosting (Firebase, Static Sites)", "Performance Optimization", "Security & Backup Solutions"]
                },
                {
                  title: "Emerging Technologies & Digital Marketing",
                  skills: ["AI-Powered Development Tools", "Modern IDEs (VSCode, Cursor, Windsurf)", "No-Code/Low-Code Platforms", "Digital Marketing & SEO Strategy", "Social Media Management & Analytics"]
                }
              ].map((area, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <div className="text-sm font-bold mb-3 text-white">{area.title}</div>
                    <ul className="text-xs text-white/90 space-y-1 text-left">
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <span className="text-white/70 mr-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;