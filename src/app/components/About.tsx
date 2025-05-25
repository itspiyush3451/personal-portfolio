// components/About.tsx
const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating
              innovative digital solutions. Currently pursuing my Master's
              degree while continuously expanding my technical expertise and
              working on exciting projects.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in technology is driven by curiosity and the desire to
              solve real-world problems through code. I enjoy learning new
              technologies, collaborating with teams, and building applications
              that make a difference.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🚀</span>
                </div>
                <p className="text-gray-600 font-medium">
                  Always learning, Always building
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
