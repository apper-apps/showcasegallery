import { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: "hero", label: "Home", icon: "Home" },
    { id: "about", label: "About", icon: "User" },
    { id: "education", label: "Education", icon: "GraduationCap" },
    { id: "experience", label: "Experience", icon: "Briefcase" },
    { id: "skills", label: "Skills", icon: "Code" },
    { id: "projects", label: "Projects", icon: "Folder" },
    { id: "contact", label: "Contact", icon: "Mail" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-bottle-green-100" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-plus-jakarta font-bold text-xl gradient-text">
            Marij Maryam
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 nav-dot",
                  activeSection === section.id
                    ? "bg-bottle-green-100 text-bottle-green-700"
                    : "text-gray-700 hover:text-bottle-green-600 hover:bg-bottle-green-50"
                )}
              >
                <ApperIcon name={section.icon} className="w-4 h-4" />
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => scrollToSection("contact")}
              className="p-2 rounded-lg text-bottle-green-600 hover:bg-bottle-green-50 transition-colors"
            >
              <ApperIcon name="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="md:hidden bg-white border-t border-bottle-green-100 overflow-x-auto">
        <div className="flex px-4 py-2 space-x-4 min-w-max">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "flex flex-col items-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 min-w-[60px]",
                activeSection === section.id
                  ? "bg-bottle-green-100 text-bottle-green-700"
                  : "text-gray-600 hover:text-bottle-green-600 hover:bg-bottle-green-50"
              )}
            >
              <ApperIcon name={section.icon} className="w-4 h-4 mb-1" />
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;