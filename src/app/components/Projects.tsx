"use client";

// Projects showcase with interactive spotlight cards and layered visuals
import { useEffect, useMemo, useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Sparkles,
  Filter,
  Search,
  X,
} from "lucide-react";
import Image from "next/image";

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
      "Tailwind CSS",
    ],
    liveUrl: "https://itspiyush3451.github.io/Loader/",
    githubUrl: "https://github.com/itspiyush3451/EduForum",
    date: "2025",
    featured: false,
  },
  {
    title: "FindMySpot: Real-Time Parking Locator",
    description:
      "A real-time parking locator web app built with the MERN stack and Leaflet for interactive maps.",
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MySQL",
      "Tailwind CSS",
      "Leaflet",
    ],
    liveUrl: "https://itspiyush3451.github.io/Loader/",
    githubUrl: "https://github.com/itspiyush3451/FindMySpot",
    date: "2025",
    featured: false,
  },
  {
    title: "Sentilytics: Twitter Sentiment Analysis",
    description:
      "This project focuses on detecting hate speech in tweets by classifying them as racist/sexist or non-racist/sexist. The dataset includes labeled tweets where: Label 1: Racist/Sexist sentiment. Label 0: Neutral or non-racist/sexist sentiment",
    technologies: ["Python", "Flask", "TensorFlow"],
    liveUrl: "https://itspiyush3451.github.io/Loader/",
    githubUrl:
      "https://github.com/itspiyush3451/Sentilytics-TwitterSentimentAnalysis",
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
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    liveUrl: "https://itspiyush3451.github.io/Loader/",
    githubUrl: "https://github.com/itspiyush3451/SmartLedger",
    date: "2024",
    featured: false,
  },
];

const Projects = () => {
  // Map tech names to their respective icon URLs for visual representation
  const techIcons: Record<string, string> = {
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "Tailwind CSS":
      "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "Material-UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    "Socket.io":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Flask:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    TensorFlow:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Spring Boot":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    Leaflet: "https://www.vectorlogo.zone/logos/leafletjs/leafletjs-icon.svg",
  };

  // Fallback icon for any tech not in our mapping
  const defaultIcon =
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";

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

  const filters = useMemo(() => {
    const technologySet = new Set<string>();

    projects.forEach((project) => {
      project.technologies.forEach((technology) =>
        technologySet.add(technology),
      );
    });

    return ["All", "Featured", ...Array.from(technologySet).sort()];
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeProject, setActiveProject] = useState(projects[0]);

  const visibleProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if (activeFilter === "All") {
      return projects.filter((project) => {
        if (!normalizedSearch) {
          return true;
        }

        const searchableText = [
          project.title,
          project.description,
          ...project.technologies,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedSearch);
      });
    }

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "Featured"
          ? project.featured
          : project.technologies.includes(activeFilter);

      if (!matchesFilter) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const searchableText = [
        project.title,
        project.description,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedSearch);
    });
  }, [activeFilter, searchTerm]);

  useEffect(() => {
    if (visibleProjects.length === 0) {
      return;
    }

    if (
      !visibleProjects.some((project) => project.title === activeProject.title)
    ) {
      setActiveProject(visibleProjects[0] ?? projects[0]);
    }
  }, [activeFilter, visibleProjects, activeProject.title]);

  const clearFilters = () => {
    setActiveFilter("All");
    setSearchTerm("");
    setActiveProject(projects[0]);
  };

  const matchedCountLabel =
    visibleProjects.length === 1
      ? "1 project"
      : `${visibleProjects.length} projects`;

  const visibleFeaturedCount = visibleProjects.filter(
    (project) => project.featured,
  ).length;

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-14 lg:py-18"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-8 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl motion-safe:animate-pulse"></div>
        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl motion-safe:animate-pulse [animation-delay:1.5s]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Selected work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore the filter chips, open a project spotlight, and switch
            between different project types without leaving the section.
          </p>
          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-4 shadow-2xl shadow-slate-200/50 backdrop-blur-xl sm:p-6">
            <div className="mb-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-slate-700">
                  <Filter size={18} className="text-blue-600" />
                  <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                    Filter projects
                  </span>
                </div>
                <div className="text-sm text-slate-500">
                  Showing{" "}
                  <span className="font-semibold text-slate-800">
                    {matchedCountLabel}
                  </span>
                </div>
              </div>

              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm transition-colors duration-300 focus-within:border-blue-300 focus-within:bg-white">
                <Search size={18} className="shrink-0 text-slate-400" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search projects, tech, or keywords"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                {searchTerm ? (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="rounded-full p-1 text-slate-400 transition-colors duration-200 hover:bg-slate-200 hover:text-slate-700"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                ) : null}
              </label>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  const count =
                    filter === "All"
                      ? projects.filter((project) => {
                          if (!searchTerm.trim()) {
                            return true;
                          }

                          const searchableText = [
                            project.title,
                            project.description,
                            ...project.technologies,
                          ]
                            .join(" ")
                            .toLowerCase();

                          return searchableText.includes(
                            searchTerm.trim().toLowerCase(),
                          );
                        }).length
                      : filter === "Featured"
                        ? projects.filter((project) => {
                            const matchesSearch =
                              !searchTerm.trim() ||
                              [
                                project.title,
                                project.description,
                                ...project.technologies,
                              ]
                                .join(" ")
                                .toLowerCase()
                                .includes(searchTerm.trim().toLowerCase());

                            return project.featured && matchesSearch;
                          }).length
                        : projects.filter((project) => {
                            const matchesSearch =
                              !searchTerm.trim() ||
                              [
                                project.title,
                                project.description,
                                ...project.technologies,
                              ]
                                .join(" ")
                                .toLowerCase()
                                .includes(searchTerm.trim().toLowerCase());

                            return (
                              project.technologies.includes(filter) &&
                              matchesSearch
                            );
                          }).length;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      <span>{filter}</span>
                      <span
                        className={`ml-2 rounded-full px-2 py-0.5 text-[11px] ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">
                  {visibleFeaturedCount} featured visible
                </span>
                {(activeFilter !== "All" || searchTerm) && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 transition-colors duration-200 hover:bg-blue-100"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            </div>

            {visibleProjects.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProjects.map((project) => {
                  const isSelected = activeProject.title === project.title;

                  return (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className={`group overflow-hidden rounded-3xl border text-left transition-all duration-300 hover:-translate-y-1 ${
                        isSelected
                          ? "border-blue-300 bg-slate-950 text-white shadow-2xl shadow-blue-200/40"
                          : "border-slate-200 bg-white shadow-md hover:border-blue-200 hover:shadow-xl"
                      }`}
                    >
                      <div className="relative h-44 overflow-hidden">
                        {getProjectVisual(project.title)}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80"></div>
                        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur-sm">
                          <Sparkles size={14} className="text-blue-600" />
                          {project.featured ? "Featured" : project.date}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <h3
                            className={`text-lg font-bold leading-tight ${isSelected ? "text-white" : "text-slate-900"}`}
                          >
                            {project.title}
                          </h3>
                          <span
                            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${isSelected ? "bg-white/10 text-blue-100" : "bg-slate-100 text-slate-500"}`}
                          >
                            {project.date}
                          </span>
                        </div>

                        <p
                          className={`line-clamp-3 text-sm leading-6 ${isSelected ? "text-slate-300" : "text-slate-600"}`}
                        >
                          {project.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-10 text-center">
                <h3 className="text-xl font-bold text-slate-900">
                  No projects match this filter
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Try a different technology, remove the search term, or reset
                  the filter to see the full list again.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Reset view
                </button>
              </div>
            )}
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.28),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.22),_transparent_30%)]"></div>

            <div className="relative flex h-full flex-col gap-6">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-200/80">
                  Spotlight
                </p>
                <h3 className="text-2xl font-bold md:text-3xl">
                  {activeProject.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                  {activeProject.description}
                </p>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
                <div className="relative h-64 overflow-hidden sm:h-72">
                  {getProjectVisual(activeProject.title)}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between text-sm text-slate-300">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold text-white">
                      <Calendar size={14} />
                      {activeProject.date}
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] text-blue-200/80">
                      Project spotlight
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200"
                      >
                        <Image
                          src={techIcons[tech] || defaultIcon}
                          alt={tech}
                          width={14}
                          height={14}
                          className="shrink-0"
                        />
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></span>
                      <ExternalLink
                        size={16}
                        className="relative z-10 transition-transform duration-300 group-hover/btn:scale-110"
                      />
                      <span className="relative z-10 group-hover/btn:text-white">
                        Live
                      </span>
                    </a>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <Github
                        size={16}
                        className="transition-transform duration-300 group-hover/btn:rotate-12"
                      />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Projects shown
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">
                    {visibleProjects.length}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Selected stack
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {activeProject.technologies.length} technologies
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/itspiyush3451"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-slate-900 bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></span>
            <Github
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover/btn:rotate-12"
            />
            <span className="relative z-10">View all work on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
