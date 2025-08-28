import NavigationBar from "@/components/molecules/NavigationBar";
import HeroSection from "@/components/organisms/HeroSection";
import AboutSection from "@/components/organisms/AboutSection";
import EducationSection from "@/components/organisms/EducationSection";
import ExperienceSection from "@/components/organisms/ExperienceSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import ContactSection from "@/components/organisms/ContactSection";

const CVShowcase = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <NavigationBar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default CVShowcase;