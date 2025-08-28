import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const Empty = ({ className, title = "No data found", message = "There's nothing to show here yet." }) => {
  return (
    <div className={cn("text-center py-16 px-6", className)}>
      <div className="max-w-md mx-auto">
        <div className="bg-bottle-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="FileX" className="w-10 h-10 text-bottle-green-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Empty;