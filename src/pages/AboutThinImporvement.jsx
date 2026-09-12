import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  Lightbulb,
  Search,
  Sparkles,
} from "lucide-react";
import { HeadingAnimation } from "../animations/HeadingAnimation";
import { CardAnimation } from "../animations/CardAnimation";

const improvements = [
  {
    icon: AlertCircle,
    title: "The Problem",
    description:
      "Important information can take time to find when users have to navigate through multiple sections or pages.",
  },
  {
    icon: Lightbulb,
    title: "Why It Matters",
    description:
      "A faster way to discover information can improve usability, reduce effort, and create a smoother user experience.",
  },
  {
    icon: Code2,
    title: "What I Learned",
    description:
      "I explored debouncing, client-side filtering, React state management, and dynamic result rendering.",
  },
];

const beforeAfter = [
  {
    title: "Before",
    items: [
      "Manual navigation",
      "More effort to find information",
      "No instant filtering experience",
    ],
  },
  {
    title: "After",
    items: [
      "Instant keyword search",
      "Category-based filtering",
      "Dynamic result updates",
    ],
  },
];

export const ImprovementOverview = () => {
  return (
    <section className="relative overflow-hidden bg-[#061525] py-20 sm:py-24 lg:py-28">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <HeadingAnimation>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400 sm:text-sm">
              <Sparkles size={15} />
              Real-World Improvement
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Why I Built This{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Smart Search
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base lg:text-lg">
              This project was created to improve the way users discover
              important information by replacing slow manual navigation with a
              faster and more intuitive search experience.
            </p>
          </div>
        </HeadingAnimation>

        <CardAnimation>
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Selected Website
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Noakhali Science and Technology University
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Official Website: nstu.ac.bd
                </p>
              </div>

              <a
                href="https://nstu.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                Visit Website
                <ExternalLink size={17} />
              </a>
            </div>
          </div>
        </CardAnimation>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {improvements.map((item, index) => {
            const Icon = item.icon;

            return (
              <CardAnimation key={item.title} index={index}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </article>
              </CardAnimation>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {beforeAfter.map((item, index) => (
            <CardAnimation key={item.title} index={index}>
              <div
                className={`rounded-2xl border p-7 ${
                  item.title === "Before"
                    ? "border-red-400/10 bg-red-400/[0.03]"
                    : "border-green-400/10 bg-green-400/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xl font-bold ${
                      item.title === "Before"
                        ? "text-red-300"
                        : "text-green-300"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      item.title === "Before"
                        ? "bg-red-400/10 text-red-300"
                        : "bg-green-400/10 text-green-300"
                    }`}
                  >
                    {item.title === "Before" ? (
                      <AlertCircle size={18} />
                    ) : (
                      <CheckCircle2 size={18} />
                    )}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {item.items.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          item.title === "Before"
                            ? "bg-red-300"
                            : "bg-green-300"
                        }`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardAnimation>
          ))}
        </div>

        <CardAnimation>
          <div className="mt-10 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-white/[0.05] to-cyan-400/[0.05] p-7 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Search size={21} />
                  </div>

                  <h3 className="text-xl font-bold text-white">
                    New Technique Applied
                  </h3>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                  I implemented a debounced client-side search system that
                  waits briefly after the user stops typing, then dynamically
                  filters the available information and displays relevant
                  results.
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300">
                  Debouncing + Dynamic Filtering
                  <ArrowRight size={17} />
                </span>
              </div>
            </div>
          </div>
        </CardAnimation>
      </div>
    </section>
  );
};