import { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { Card, CardContent } from "@/components/atoms/Card";
import { cvService } from "@/services/api/cvService";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  const loadContactInfo = async () => {
    try {
      const data = await cvService.getPersonalInfo();
      setPersonalInfo(data);
    } catch (err) {
      console.error("Error loading contact info:", err);
    }
  };

  useEffect(() => {
    loadContactInfo();
  }, []);

  const handleEmailClick = () => {
    if (personalInfo?.email) {
      window.location.href = `mailto:${personalInfo.email}`;
      toast.success("Email client opened!");
    }
  };

  const handleLinkedInClick = () => {
    if (personalInfo?.linkedin) {
      window.open(personalInfo.linkedin, "_blank", "noopener,noreferrer");
      toast.success("Opening LinkedIn profile!");
    }
  };

  const handleCopyEmail = async () => {
    if (personalInfo?.email) {
      try {
        await navigator.clipboard.writeText(personalInfo.email);
        toast.success("Email copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy email");
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-bottle-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-plus-jakarta font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bottle-green-600 to-bottle-green-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8 section-reveal">
              <div>
                <h3 className="text-2xl font-plus-jakarta font-semibold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  I'm always interested in new opportunities, collaborations, and connecting 
                  with fellow developers and professionals. Feel free to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* Email */}
                <Card className="group cursor-pointer" onClick={handleEmailClick}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-bottle-green-100 rounded-lg flex items-center justify-center group-hover:bg-bottle-green-200 transition-colors">
                        <ApperIcon name="Mail" className="w-6 h-6 text-bottle-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">{personalInfo?.email || "Loading..."}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyEmail();
                        }}
                        className="p-2 rounded-lg text-gray-400 hover:text-bottle-green-600 hover:bg-bottle-green-50 transition-colors"
                      >
                        <ApperIcon name="Copy" className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* LinkedIn */}
                <Card className="group cursor-pointer" onClick={handleLinkedInClick}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-bottle-green-100 rounded-lg flex items-center justify-center group-hover:bg-bottle-green-200 transition-colors">
                        <ApperIcon name="Linkedin" className="w-6 h-6 text-bottle-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">LinkedIn</h4>
                        <p className="text-gray-600">Professional Profile</p>
                      </div>
                      <ApperIcon name="ExternalLink" className="w-4 h-4 text-gray-400 group-hover:text-bottle-green-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Visual */}
            <div className="section-reveal">
              <div className="bg-gradient-to-br from-bottle-green-100 to-bottle-green-50 rounded-2xl p-8 text-center">
                <div className="space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-bottle-green-600 to-bottle-green-700 rounded-full mx-auto flex items-center justify-center">
                    <ApperIcon name="MessageCircle" className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Ready to Collaborate?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Whether you're looking for a developer, have a project idea, 
                      or just want to connect, I'd love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      onClick={handleEmailClick}
                      className="w-full"
                      size="lg"
                    >
                      <ApperIcon name="Mail" className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                    
                    <Button 
                      variant="outline"
                      onClick={handleLinkedInClick}
                      className="w-full"
                      size="lg"
                    >
                      <ApperIcon name="Linkedin" className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center section-reveal">
          <div className="border-t border-bottle-green-200 pt-8">
            <p className="text-gray-600">
              © 2024 {personalInfo?.name || "Marij Maryam"}. Built with React + Vite
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;