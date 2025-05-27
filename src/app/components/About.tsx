// About section with animated tech skills grid and a bit of personality
import Image from 'next/image';

const About = () => {
  const skills = [
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend"
    },
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend"
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend"
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Backend"
    },
    { 
      name: "C++", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      category: "Programming"
    },
    { 
      name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "Programming"
    },
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database"
    },
    { 
      name: "PostgreSQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database"
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Tools"
    },
    { 
      name: "Postman", 
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      category: "Tools"
    },
  ];

  return (
    <>
      {/* Bio section with animation */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal intro paragraphs */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m a full-stack developer currently pursuing my Master&apos;s degree. 
                I build web applications and enjoy solving problems with code.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                I work with various technologies and frameworks, picking up new ones 
                as needed. When not coding, I&apos;m usually debugging something that 
                worked perfectly yesterday.
              </p>
            </div>

            {/* Developer character animation */}
            <div className="relative h-96 flex items-center justify-center">
              <div className="relative">
                {/* Custom animated developer character */}
                <div className="w-64 h-64 relative">
                  {/* Head */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-yellow-200 to-yellow-300 rounded-full border-2 border-gray-800">
                    {/* Eyes */}
                    <div className="absolute top-4 left-3 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                    <div className="absolute top-4 right-3 w-2 h-2 bg-black rounded-full animate-pulse"></div>
                    {/* Mouth - changes expressions */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black rounded-full animate-bounce"></div>
                  </div>
                  
                  {/* Body */}
                  <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg border-2 border-gray-800"></div>
                  
                  {/* Arms - typing motion */}
                  <div className="absolute top-28 left-8 w-12 h-3 bg-yellow-300 rounded-full border border-gray-800 animate-pulse origin-right transform rotate-12"></div>
                  <div className="absolute top-28 right-8 w-12 h-3 bg-yellow-300 rounded-full border border-gray-800 animate-pulse origin-left transform -rotate-12"></div>
                  
                  {/* Legs */}
                  <div className="absolute bottom-8 left-6 w-3 h-16 bg-blue-600 rounded-full border border-gray-800"></div>
                  <div className="absolute bottom-8 right-6 w-3 h-16 bg-blue-600 rounded-full border border-gray-800"></div>
                </div>

                {/* Floating thought bubbles with sarcastic messages */}
                <div className="absolute -top-4 -right-8 bg-white border-2 border-gray-800 rounded-2xl p-3 shadow-lg animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
                  <div className="text-xs font-mono text-gray-800">&quot;It works on my machine&quot;</div>
                  <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-white transform translate-y-full"></div>
                  <div className="absolute bottom-0 left-4 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-800 transform translate-y-full translate-x-px"></div>
                </div>

                <div className="absolute -bottom-12 -left-8 bg-white border-2 border-gray-800 rounded-2xl p-3 shadow-lg animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3s'}}>
                  <div className="text-xs font-mono text-gray-800">&quot;Just one more bug...&quot;</div>
                  <div className="absolute top-0 right-4 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-white transform -translate-y-full"></div>
                  <div className="absolute top-0 right-4 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-gray-800 transform -translate-y-full -translate-x-px"></div>
                </div>

                {/* Coffee cup - essential developer fuel */}
                <div className="absolute -right-12 top-32 w-8 h-10 bg-gradient-to-b from-yellow-100 to-yellow-200 border-2 border-gray-800 rounded-b-lg">
                  <div className="absolute -right-2 top-2 w-4 h-4 border-2 border-gray-800 rounded-full border-l-transparent"></div>
                  {/* Steam */}
                  <div className="absolute -top-2 left-1 w-1 h-4 opacity-60">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
                  </div>
                  <div className="absolute -top-2 left-3 w-1 h-4 opacity-60">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <div className="absolute -top-2 left-5 w-1 h-4 opacity-60">
                    <div className="w-1 h-1 bg-gray-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>

                {/* Laptop/Code */}
                <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-lg border-2 border-gray-900">
                  <div className="w-full h-2/3 bg-green-400 rounded-t-md flex items-center justify-center">
                    <div className="text-xs font-mono text-green-900 animate-pulse">{'> loading...'}</div>
                  </div>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute top-4 left-4 w-8 h-8 text-2xl animate-spin" style={{animationDuration: '8s'}}>⚙️</div>
              <div className="absolute bottom-4 right-4 w-8 h-8 text-2xl animate-bounce" style={{animationDelay: '2s'}}>💻</div>
              <div className="absolute top-1/2 left-2 w-6 h-6 text-xl animate-pulse" style={{animationDelay: '1s'}}>🐛</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-18">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies I work with
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-md border border-gray-200/50 shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-2xl hover:shadow-gray-900/20 hover:scale-105 transition-all duration-300 ease-out hover:bg-white hover:border-gray-300/60"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Sharp gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1px]">
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </div>
                
                {/* Tech icon with subtle gradient background */}
                <div className="relative mb-4 p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg group-hover:from-slate-50 group-hover:to-gray-100 group-hover:shadow-md transition-all duration-300 border border-gray-200/50">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    width={48}
                    height={48}
                    className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                  />
                </div>
                
                {/* Technology name with hover effect */}
                <span className="text-sm md:text-base font-bold text-gray-900 text-center group-hover:text-slate-800 transition-colors duration-300">
                  {skill.name}
                </span>
                
                {/* Category tag that appears on hover */}
                <span className="text-xs text-gray-600 mt-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 font-medium group-hover:bg-slate-200 group-hover:text-slate-700">
                  {skill.category}
                </span>

                {/* Subtle inner shadow that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-100/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          {/* <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 text-gray-600">
              <span className="w-8 h-px bg-gradient-to-r from-blue-600 to-purple-600"></span>
              <span className="text-sm font-medium">Always learning new technologies</span>
              <span className="w-8 h-px bg-gradient-to-r from-purple-600 to-pink-600"></span>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;