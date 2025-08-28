import { useState, useEffect } from "react";
import ProjectCard from "@/components/molecules/ProjectCard";
import { cvService } from "@/services/api/cvService";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await cvService.getProjects();
      setProjects(data);
    } catch (err) {
      setError("Failed to load projects");
      console.error("Error loading projects:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadProjects} />;
  if (!projects || projects.length === 0) return <Empty title="No projects found" />;

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-plus-jakarta font-bold gradient-text mb-6">
            Portfolio Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bottle-green-600 to-bottle-green-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my web development projects spanning various technologies and applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.Id} 
              className="section-reveal"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Projects Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 section-reveal">
            <h3 className="text-2xl font-plus-jakarta font-semibold text-gray-900 mb-4">
              Diverse Project Portfolio
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              From hotel booking systems to educational platforms, games to business tools, 
              my projects demonstrate versatility across different domains and technologies.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Projects", value: projects.length },
                { label: "Technologies Used", value: "15+" },
                { label: "Live Deployments", value: projects.length },
                { label: "Domains Covered", value: "8+" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
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

export default ProjectsSection;