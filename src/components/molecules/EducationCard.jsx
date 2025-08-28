import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";

const EducationCard = ({ education }) => {
  return (
    <Card className="hover-lift">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl">{education.degree}</CardTitle>
            <div className="flex items-center gap-2 text-bottle-green-600 font-medium">
              <ApperIcon name="GraduationCap" className="w-4 h-4" />
              {education.institution}
            </div>
          </div>
          <Badge variant={education.status === "Current" ? "default" : "secondary"}>
            {education.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-2 text-gray-600">
          <ApperIcon name="Calendar" className="w-4 h-4" />
          {education.period}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;