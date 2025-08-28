import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";

const ProjectCard = ({ project }) => {
  const handleVisitProject = () => {
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="h-full hover-lift group">
      <CardHeader>
        <CardTitle className="text-lg group-hover:gradient-text transition-all duration-300">
          {project.name}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <p className="text-gray-600 mb-6 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        <Button 
          onClick={handleVisitProject}
          className="w-full"
          size="sm"
        >
          <ApperIcon name="ExternalLink" className="w-4 h-4 mr-2" />
          View Project
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;