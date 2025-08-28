import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";

const ExperienceCard = ({ experience }) => {
  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl">{experience.position}</CardTitle>
            <div className="flex items-center gap-2 text-bottle-green-600 font-medium">
              <ApperIcon name="Building" className="w-4 h-4" />
              {experience.company}
            </div>
          </div>
          <Badge variant="default">{experience.type}</Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <ApperIcon name="MapPin" className="w-4 h-4" />
            {experience.location}
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <ApperIcon name="Calendar" className="w-4 h-4" />
            {experience.period}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;