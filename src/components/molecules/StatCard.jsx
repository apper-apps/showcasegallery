import { Card, CardContent } from "@/components/atoms/Card";
import { cn } from "@/utils/cn";

const StatCard = ({ label, value, className }) => {
  return (
    <Card className={cn("text-center hover-lift border-bottle-green-200 bg-gradient-to-br from-white to-bottle-green-50", className)}>
      <CardContent className="p-6">
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold gradient-text">
            {value}
          </div>
          <div className="text-sm font-medium text-bottle-green-700">
            {label}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;