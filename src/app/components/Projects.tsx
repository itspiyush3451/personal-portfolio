// Projects showcase with interactive cards and tech stacks
import { ExternalLink, Github, Calendar } from "lucide-react";
import Image from 'next/image';

const Projects = () => {
  // Map tech names to their respective icon URLs for visual representation
  const techIcons: Record<string, string> = {
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "Material-UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "TensorFlow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    "Leaflet": "https://www.vectorlogo.zone/logos/leafletjs/leafletjs-icon.svg"
  };
  
  // Fallback icon for any tech not in our mapping
  const defaultIcon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
  
  // Custom visuals for each project based on title - uses screenshots with overlay gradient
  const getProjectVisual = (title: string) => {
    if (title.includes("EduForum")) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src="/Project_UI/EduForum.jpg" 
            alt="EduForum Project Screenshot" 
            fill 
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      );
    }
    
    if (title.includes("FindMySpot")) {
      return (
        <div className="relative w-full h-full overflow-hidden">
        <Image 
          src="/Project_UI/FindMySpot.png" 
          alt="FindMySpot Screenshot" 
          fill 
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      );
    }
    
    if (title.includes("Sentilytics")) {
      return (
        <div className="relative w-full h-full overflow-hidden">
        <Image 
          src="/Project_UI/Sentilytics.png" 
          alt="Sentilytics Screenshot" 
          fill 
          className="object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>
      );
    }
    
    if (title.includes("Exam Portal")) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src="/Project_UI/StudentExamPortal.jpeg" 
            alt="Student Exam Portal Screenshot" 
            fill 
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      );
    }
    
    if (title.includes("Text-to-Speech")) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src="/Project_UI/text-to-speech.png" 
            alt="Text-to-Speech Converter Screenshot" 
            fill 
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      );
    }
    
    if (title.includes("SmartLedger")) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src="/Project_UI/SmartLedger.png" 
            alt="SmartLedger Project Screenshot" 
            fill 
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      );
    }
    
    if (title.includes("Syllabus Deadline Optimizer")) {
      return (
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src="/Project_UI/syllabus-deadline-optimizer.png" 
            alt="Syllabus Deadline Optimizer Screenshot" 
            fill 
            className="object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>
      );
    }
    
    // Default visual
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-500 via-slate-600 to-gray-700 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-xl">💻</span>
          </div>
          <div className="text-sm font-medium opacity-90">Project</div>
        </div>
      </div>
    );
  };
  
  const projects = [
    {
      title: "EduForum: Smart Academic Forum & Chatbot System",
      description:
        "A modern web platform revolutionizing campus communication through AI-powered assistance.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS"
       
      ],
      liveUrl: "https://itspiyush3451.github.io/Loader/",
      githubUrl: "https://github.com/itspiyush3451/EduForum",
      date: "2025",
      featured: true,
    },
    {
      title: "FindMySpot: Real-Time Parking Locator",
      description:
        "A real-time parking locator web app built with the MERN stack and Leaflet for interactive maps.",
      technologies: ["React", "Node.js", "Socket.io", "MySQL","Tailwind CSS", "Leaflet"],
      liveUrl: "https://itspiyush3451.github.io/Loader/",
      githubUrl: "https://github.com/itspiyush3451/FindMySpot",
      date: "2025",
      featured: true,
    },
    {
      title: "Sentilytics: Twitter Sentiment Analysis",
      description:
        "This project focuses on detecting hate speech in tweets by classifying them as racist/sexist or non-racist/sexist. The dataset includes labeled tweets where: Label 1: Racist/Sexist sentiment. Label 0: Neutral or non-racist/sexist sentiment",
      technologies: ["Python", "Flask", "TensorFlow"],
      liveUrl: "https://itspiyush3451.github.io/Loader/",
      githubUrl: "https://github.com/itspiyush3451/Sentilytics-TwitterSentimentAnalysis",
      date: "2024",
      featured: false,
    },
    {
      title: "Syllabus Deadline Optimizer",
      description:
        "A web-based application to help professors manage their lectures efficiently and track syllabus progress according to deadlines.",
      technologies: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
      liveUrl: "https://itspiyush3451.github.io/Loader/",
      githubUrl: "https://github.com/itspiyush3451/syllabus-deadline-optimizer",
      date: "2024",
      featured: false,
    },
    {
      title: "Student Exam Portal",
      description:
        "A PHP and PostgreSQL-based platform enabling efficient online exams with real-time timers, easy exam management for administrators, and a seamless experience for students.",
      technologies: ["PHP", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://itspiyush3451.github.io/Loader/",
      githubUrl: "https://github.com/itspiyush3451/Student-Exam-Portal",
      date: "2024",
      featured: false,
    },
    {
      title: "Text-to-Speech Converter",
      description:
        "A JavaScript-based Text-to-Speech tool that converts text into natural-sounding speech using the Web Speech API. It allows for easy integration of speech functionality into web applications with customizable options like rate, pitch, and volume.",
      technologies: ["HTML", "CSS", "JavaScript", "Vite"],
      liveUrl: "https://itspiyush3451.github.io/Loader/",
      githubUrl: "https://github.com/itspiyush3451/Text-to-Speech",
      date: "2024",
      featured: false,
    },
    {
      title: "SmartLedger",
      description:
        "A full-stack invoicing application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), designed specifically for freelancers and small businesses to create, manage, and track invoices efficiently.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
      liveUrl: "https://itspiyush3451.github.io/Loader/",
      githubUrl: "https://github.com/itspiyush3451/SmartLedger",
      date: "2024",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 text-center lg:text-left">
            Featured Projects
          </h3>
          <div className="grid gap-6 lg:gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100 hover:bg-gray-50"
              >
                {/* Project Visual */}
                <div className="relative overflow-hidden h-64 sm:h-72 lg:h-80">
                  {getProjectVisual(project.title)}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-8">
                  {/* Title and Date */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h4>
                    <div className="flex items-center text-gray-500 text-sm shrink-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-medium">{project.date}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-sm group/tech"
                          title={tech}
                        >
                          <Image 
                            src={techIcons[tech] || defaultIcon}
                            alt={tech}
                            width={20}
                            height={20}
                            className="transition-transform duration-300 group-hover/tech:scale-110 shrink-0"
                          />
                          <span className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Enhanced Professional Design */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-center gap-3 bg-white border-2 border-blue-500 text-blue-600 px-6 py-3.5 rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
                      <ExternalLink size={18} className="relative z-10 transition-transform duration-300 group-hover/btn:scale-110" />
                      <span className="relative z-10">View Live</span>
                      <div className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center justify-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden border-2 border-transparent hover:border-gray-700"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                      <Github size={18} className="relative z-10 transition-transform duration-300 group-hover/btn:rotate-12" />
                      <span className="relative z-10">Source Code</span>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 text-center lg:text-left">
            Other Projects
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 hover:bg-gray-50"
              >
                {/* Project Visual */}
                <div className="relative h-56 sm:h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  {getProjectVisual(project.title)}
                </div>

                {/* Project Content */}
                <div className="p-5">
                  {/* Title and Date */}
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h4>
                    <span className="text-gray-500 text-xs font-medium shrink-0 bg-gray-50 px-2 py-1 rounded">
                      {project.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <div 
                          key={techIndex}
                          className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-md border border-gray-200 hover:border-blue-300 transition-colors duration-300"
                          title={tech}
                        >
                          <Image 
                            src={techIcons[tech] || defaultIcon}
                            alt={tech}
                            width={16}
                            height={16}
                            className="shrink-0"
                          />
                          <span className="text-xs font-medium text-gray-700 truncate max-w-[80px]">
                            {tech}
                          </span>
                        </div>
                      ))}
                      {project.technologies.length > 4 && (
                        <div className="flex items-center px-2.5 py-1.5 bg-blue-50 rounded-md border border-blue-200">
                          <span className="text-blue-600 text-xs font-semibold">
                            +{project.technologies.length - 4}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons - Enhanced Professional Design */}
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 text-blue-600 hover:text-white transition-all duration-300 text-sm font-semibold bg-blue-50 hover:bg-blue-500 px-4 py-2.5 rounded-lg flex-1 justify-center border border-blue-200 hover:border-blue-500 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-blue-500 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <ExternalLink size={14} className="relative z-10 transition-transform duration-300 group-hover/btn:scale-110" />
                      <span className="relative z-10">Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative flex items-center gap-2 text-gray-600 hover:text-white transition-all duration-300 text-sm font-semibold bg-gray-50 hover:bg-gray-700 px-4 py-2.5 rounded-lg flex-1 justify-center border border-gray-200 hover:border-gray-700 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gray-700 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <Github size={14} className="relative z-10 transition-transform duration-300 group-hover/btn:rotate-12" />
                      <span className="relative z-10">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href="https://github.com/itspiyush3451"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            <Github size={20} className="relative z-10 transition-transform duration-300 group-hover/btn:rotate-12" />
            <span className="relative z-10">View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;