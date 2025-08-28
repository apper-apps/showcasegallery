import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

const SkillBar = ({ skill, className, animated = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="font-medium text-gray-900">{skill.name}</span>
        <span className="text-sm font-semibold gradient-text">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={cn(
            "h-3 bg-gradient-to-r from-bottle-green-600 to-bottle-green-500 rounded-full transition-all duration-1000 ease-out",
            animated && isVisible ? "opacity-100" : "opacity-0 w-0"
          )}
          style={{
            width: animated && isVisible ? `${skill.level}%` : "0%"
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;