import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "bg-gradient-to-r from-bottle-green-600 to-bottle-green-700 text-white hover:from-bottle-green-700 hover:to-bottle-green-800 hover:scale-105 focus-visible:ring-bottle-green-600",
    outline: "border border-bottle-green-600 text-bottle-green-600 hover:bg-bottle-green-50 hover:scale-105",
    ghost: "text-bottle-green-600 hover:bg-bottle-green-50 hover:scale-105",
    link: "text-bottle-green-600 underline-offset-4 hover:underline"
  };
  
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-12 rounded-lg px-8",
    icon: "h-10 w-10"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;