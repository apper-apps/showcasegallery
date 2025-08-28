import personalInfoData from "@/services/mockData/personalInfo.json";
import educationData from "@/services/mockData/education.json";
import experienceData from "@/services/mockData/experience.json";
import skillsData from "@/services/mockData/skills.json";
import projectsData from "@/services/mockData/projects.json";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const cvService = {
  async getPersonalInfo() {
    await delay(300);
    return { ...personalInfoData };
  },

  async getEducation() {
    await delay(250);
    return educationData.map(item => ({ ...item }));
  },

  async getExperience() {
    await delay(280);
    return experienceData.map(item => ({ ...item }));
  },

  async getSkills() {
    await delay(320);
    return skillsData.map(skill => ({ ...skill }));
  },

  async getProjects() {
    await delay(290);
    return projectsData.map(project => ({ ...project }));
  },

  async getSkillsByCategory() {
    await delay(350);
    const skills = skillsData.map(skill => ({ ...skill }));
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {});
    
    // Sort skills within each category by level
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => b.level - a.level);
    });
    
    return grouped;
  }
};