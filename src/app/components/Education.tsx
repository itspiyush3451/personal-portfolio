// Education section with responsive cards and status indicators
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "Indira College of Engineering and Management",
      location: "Pune, India",
      period: "2024 - Present",
      status: "Pursuing",
      subjects: ["Advanced Algorithms", "Data Structures", "Machine Learning", "Software Architecture"],
      isActive: true,
    },
    {
      degree: "Bachelor of Computer Application", 
      institution: "Dr. D. Y. Patil Arts, Commerce & Science College",
      location: "Pimpri, India",
      period: "2021 - 2024",
      status: "Completed",
      subjects: ["Web Development", "Database Systems", "Software Engineering", "Computer Networks"],
      isActive: false,
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section title with gradient underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        {/* Education timeline with cards */}
        <div className="space-y-8 md:space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                
                <div className="p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    
                    {/* Degree info with icon indicators */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 rounded-xl ${
                          edu.isActive 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          <GraduationCap size={24} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            {edu.degree}
                          </h3>
                          
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                              <BookOpen size={16} />
                              <span className="font-medium">{edu.institution}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span>{edu.location}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key subjects with pill-style tags */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Subjects</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 transition-colors duration-200"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Current education status badge */}
                    <div className="lg:text-right">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                        edu.isActive
                          ? "bg-green-100 text-green-700 border-2 border-green-200"
                          : "bg-gray-100 text-gray-700 border-2 border-gray-200"
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Colored status indicator at bottom of card */}
                <div className={`h-1 ${
                  edu.isActive 
                    ? 'bg-gradient-to-r from-green-400 to-green-600' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-600'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Education;