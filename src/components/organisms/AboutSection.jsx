import ApperIcon from "@/components/ApperIcon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-plus-jakarta font-bold gradient-text mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-bottle-green-600 to-bottle-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 section-reveal">
            <h3 className="text-2xl font-plus-jakarta font-semibold text-gray-900">
              Passionate Developer & Business Student
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development began with simple curiosity about how websites work, 
              which quickly evolved into a deep passion for creating meaningful digital experiences. 
              I believe in combining technical expertise with business acumen to create solutions 
              that not only function well but also drive real value.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently pursuing my Bachelor of Business Administration while building practical 
              experience through internships and personal projects. I'm particularly interested 
              in full-stack development, cloud technologies, and emerging digital trends.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: "Code", text: "Full-Stack Development" },
                { icon: "Cloud", text: "Cloud Technologies" },
                { icon: "Palette", text: "UI/UX Design" },
                { icon: "TrendingUp", text: "Business Strategy" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-bottle-green-100 rounded-lg flex items-center justify-center">
                    <ApperIcon name={item.icon} className="w-5 h-5 text-bottle-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="section-reveal">
            <div className="relative">
              <div className="bg-gradient-to-br from-bottle-green-100 to-bottle-green-50 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-bottle-green-600 to-bottle-green-700 rounded-full mx-auto flex items-center justify-center">
                    <ApperIcon name="Code2" className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Always Learning
                    </h4>
                    <p className="text-gray-600">
                      Continuously exploring new technologies and methodologies
                    </p>
                  </div>

                  <div className="flex justify-center space-x-4">
                    {["React", "Python", "PHP", "WordPress"].map((tech) => (
                      <div
                        key={tech}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-bottle-green-600 shadow-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-bottle-green-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-bottle-green-300 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -left-6 w-6 h-6 bg-bottle-green-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;