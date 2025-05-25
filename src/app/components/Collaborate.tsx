// components/Collaborate.tsx
import {
  Code,
  Users,
  Lightbulb,
  Rocket,
  Github,
  MessageCircle,
} from "lucide-react";

const Collaborate = () => {
  const collaborationTypes = [
    {
      icon: Code,
      title: "Open Source Projects",
      description:
        "Let's contribute to meaningful open source projects together. I'm always excited to collaborate on projects that make a positive impact on the developer community.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Users,
      title: "Team Projects",
      description:
        "Looking for a reliable team member? I bring technical expertise, collaborative spirit, and dedication to delivering high-quality solutions.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Innovative Ideas",
      description:
        "Have a brilliant idea that needs technical execution? Let's brainstorm and build something amazing together from concept to completion.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Rocket,
      title: "Startup Ventures",
      description:
        "Interested in joining early-stage startups or building MVP prototypes. I'm passionate about turning innovative concepts into reality.",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const benefits = [
    "Full-stack development expertise",
    "Modern technology stack knowledge",
    "Agile development experience",
    "Strong problem-solving skills",
    "Excellent communication",
    "Commitment to quality code",
  ];

  return (
    <section
      id="collaborate"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Collaborate
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            I'm always excited to work on interesting projects and collaborate
            with passionate developers. Here's how we can work together to
            create something amazing.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {collaborationTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What I Bring */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Availability */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-xl p-8 text-white text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">🚀 Currently Available</h3>
          <p className="text-lg mb-6 opacity-90">
            I'm actively looking for collaboration opportunities and exciting
            projects to work on. Whether it's a short-term project or long-term
            partnership, I'm ready to contribute!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-medium">
              ✅ Open to freelance projects
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-medium">
              ✅ Available for part-time work
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg font-medium">
              ✅ Interested in internships
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Ready to Start Something Great?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm just a message away! Let's discuss your project ideas and see
            how we can work together to bring them to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="inline mr-2" size={20} />
              Let's Talk
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
            >
              <Github className="inline mr-2" size={20} />
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
