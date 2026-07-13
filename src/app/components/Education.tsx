"use client";

// Education section with a selectable timeline and animated detail view
import { useMemo, useState } from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Sparkles,
} from "lucide-react";

const Education = () => {
  const educationData = useMemo(
    () => [
      {
        degree: "Master of Computer Application",
        institution: "Indira College of Engineering and Management",
        location: "Pune, India",
        period: "2024 - 2026",
        status: "Completed",
        summary:
          "Completed advanced software engineering, scalable systems, cloud architecture, and applied machine learning coursework.",
        subjects: [
          "Advanced Algorithms",
          "Data Structures",
          "Machine Learning",
          "Software Architecture",
          "Cloud Computing",
          "Web Development",
        ],
        highlight: "Completed advanced backend and architecture work",
        progress: 100,
        accent: "from-blue-500 via-sky-500 to-cyan-400",
      },
      {
        degree: "Bachelor of Computer Application",
        institution: "Dr. D. Y. Patil Arts, Commerce & Science College",
        location: "Pimpri, India",
        period: "2021 - 2024",
        status: "Completed",
        summary:
          "Built a strong base in programming, databases, networking, and full-stack development fundamentals.",
        subjects: [
          "Web Development",
          "Database Systems",
          "Software Engineering",
          "Computer Networks",
        ],
        highlight: "Completed core CS and development foundation",
        progress: 100,
        accent: "from-violet-500 via-fuchsia-500 to-pink-400",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeEducation = educationData[activeIndex];

  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/60"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-8 h-56 w-56 rounded-full bg-blue-400/15 blur-3xl motion-safe:animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-400/15 blur-3xl motion-safe:animate-pulse [animation-delay:1.5s]"></div>
      </div>

      <div className="relative container mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Learning journey
          </p>
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Education that keeps moving
          </h2>
          <div className="mx-auto mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-blue-600 to-violet-600"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="space-y-5">
            {educationData.map((edu, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={edu.degree}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative w-full overflow-hidden rounded-3xl border p-6 text-left shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent md:p-8 ${
                    isActive
                      ? "border-blue-200 bg-white shadow-2xl shadow-blue-200/40 -translate-y-1"
                      : "border-slate-200/80 bg-white/85 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                  }`}
                >
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${edu.accent} from-0% to-100%`}
                    style={{ opacity: isActive ? 0.1 : 0 }}
                  ></div>

                  <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="mb-5 flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 bg-gradient-to-br ${edu.accent}`}
                        >
                          <GraduationCap size={26} />
                        </div>

                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
                              {edu.degree}
                            </h3>
                            <span
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                                isActive
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {edu.status}
                            </span>
                          </div>

                          <div className="space-y-2 text-sm text-slate-600 md:text-base">
                            <div className="flex items-center gap-2">
                              <BookOpen size={16} className="text-blue-600" />
                              <span className="font-medium text-slate-700">
                                {edu.institution}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-blue-600" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-blue-600" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="mb-5 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
                        {edu.summary}
                      </p>

                      <div className="flex flex-wrap gap-2.5">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-medium text-slate-700 transition-all duration-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="sm:min-w-36 sm:text-right">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Sparkles size={16} className="text-blue-600" />
                        {isActive ? "Selected" : "Explore"}
                      </div>
                      <div className="text-sm font-medium text-slate-500">
                        Progress
                      </div>
                      <div className="mt-2 h-2 w-full rounded-full bg-slate-100 sm:w-40">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${edu.accent} transition-all duration-500 ease-out`}
                          style={{ width: `${edu.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-slate-900">
                        {edu.progress}%
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-6 h-1 rounded-full bg-gradient-to-r ${edu.accent} opacity-90`}
                  ></div>
                </button>
              );
            })}
          </div>

          <aside className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-2xl md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.25),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.22),_transparent_35%)]"></div>

            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/80">
                  Active milestone
                </p>
                <h3 className="text-2xl font-bold md:text-3xl">
                  {activeEducation.degree}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-300 md:text-base">
                  {activeEducation.highlight}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Institution
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {activeEducation.institution}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Location
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {activeEducation.location}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Timeline
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {activeEducation.period}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Status
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {activeEducation.status}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between text-sm text-slate-300">
                  <span>Completion</span>
                  <span>{activeEducation.progress}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${activeEducation.accent} transition-all duration-700 ease-out`}
                    style={{ width: `${activeEducation.progress}%` }}
                  ></div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {activeIndex === 0
                    ? "This completed master's program focused on advanced systems and practical architecture work."
                    : "This chapter established the core programming and problem-solving foundation for the portfolio."}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Education;
