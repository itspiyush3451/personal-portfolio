// components/Education.tsx
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master's Degree",
      field: "Computer Science", // Update with your actual field
      institution: "Your University Name",
      location: "City, Country",
      period: "2023 - Present",
      status: "Currently Pursuing",
      description:
        "Focusing on advanced topics in software engineering, algorithms, and modern development practices.",
      highlights: [
        "Advanced Algorithms",
        "Software Architecture",
        "Machine Learning",
        "Research Methods",
      ],
    },
    {
      degree: "Bachelor's Degree",
      field: "Computer Science & Engineering", // Update with your actual field
      institution: "Your Previous University",
      location: "City, Country",
      period: "2019 - 2023",
      status: "Completed",
      description:
        "Built a strong foundation in computer science fundamentals and software development.",
      highlights: [
        "Data Structures",
        "Web Development",
        "Database Systems",
        "Final Year Project",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My academic journey in computer science and technology
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  {/* Main Content */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <GraduationCap className="text-white" size={24} />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold mb-3">
                          {edu.field}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-600 mb-4">
                          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
                            <MapPin size={16} />
                            <span>
                              {edu.institution}, {edu.location}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              edu.status === "Currently Pursuing"
                                ? "bg-green-100 text-green-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Key Highlights */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Key Areas:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress bar for current education */}
              {edu.status === "Currently Pursuing" && (
                <div className="bg-gray-50 px-8 py-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>In Progress</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4 animate-pulse"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
