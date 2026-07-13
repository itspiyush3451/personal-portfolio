"use client";

// components/Collaborate.tsx
import { useState } from "react";
import {
  Code,
  Users,
  Lightbulb,
  Rocket,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Collaborate = () => {
  const collaborationTypes = [
    {
      icon: Code,
      title: "Open Source Projects",
      description:
        "Let&apos;s contribute to meaningful open source projects together. I&apos;m always excited to collaborate on projects that make a positive impact on the developer community.",
      color: "from-emerald-400 via-teal-500 to-cyan-500",
      label: "Build in public",
      detail:
        "Great for reusable tools, developer experiences, and community-focused work that benefits from clean code and visible progress.",
    },
    {
      icon: Users,
      title: "Team Projects",
      description:
        "Looking for a reliable team member? I bring technical expertise, collaborative spirit, and dedication to delivering high-quality solutions.",
      color: "from-blue-400 via-sky-500 to-indigo-500",
      label: "Ship together",
      detail:
        "Best for product teams that need steady communication, ownership, and a developer who can work across stack boundaries.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Ideas",
      description:
        "Have a brilliant idea that needs technical execution? Let's brainstorm and build something amazing together from concept to completion.",
      color: "from-amber-400 via-orange-500 to-rose-500",
      label: "Prototype fast",
      detail:
        "Perfect for experiments, concept validation, and turning a rough idea into something tangible without losing momentum.",
    },
    {
      icon: Rocket,
      title: "Startup Ventures",
      description:
        "Interested in joining early-stage startups or building MVP prototypes. I'm passionate about turning innovative concepts into reality.",
      color: "from-violet-400 via-fuchsia-500 to-pink-500",
      label: "Move quickly",
      detail:
        "A good fit for early-stage products where speed, clarity, and product-minded engineering matter more than ceremony.",
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

  const [activeIndex, setActiveIndex] = useState(0);
  const activeType = collaborationTypes[activeIndex];

  return (
    <section
      id="collaborate"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-20 text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl motion-safe:animate-pulse"></div>
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl motion-safe:animate-pulse [animation-delay:1.5s]"></div>
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
            Collaboration
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something worth sharing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Pick a collaboration mode to see how we can work together. The
            section is built to feel more like a live conversation than a static
            list.
          </p>
          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500"></div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2">
            {collaborationTypes.map((type, index) => {
              const IconComponent = type.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={type.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-3xl border p-6 text-left shadow-2xl transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 ${
                    isActive
                      ? "border-white/20 bg-white/10"
                      : "border-white/10 bg-white/5 hover:bg-white/8"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 transition-opacity duration-300 ${
                      isActive ? "opacity-20" : "group-hover:opacity-10"
                    }`}
                  ></div>

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${type.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="text-white" size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white transition-colors duration-300">
                          {type.title}
                        </h3>
                        {isActive ? (
                          <Sparkles size={16} className="text-cyan-300" />
                        ) : null}
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                        {type.label}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${activeType.color} opacity-10`}
            ></div>

            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  Active path
                </p>
                <h3 className="text-3xl font-bold sm:text-4xl">
                  {activeType.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  {activeType.detail}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Best for
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {activeIndex === 0
                      ? "Developer communities"
                      : activeIndex === 1
                        ? "Cross-functional teams"
                        : activeIndex === 2
                          ? "Idea validation"
                          : "Early-stage products"}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    Collaboration style
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">
                    {activeType.label}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                <h4 className="text-lg font-semibold text-white">
                  What I bring
                </h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"></span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-100"
                >
                  Start a conversation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="mailto:piyus3451@gmail.com"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Send an email
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
