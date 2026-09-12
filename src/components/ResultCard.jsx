import { ArrowUpRight, FileText } from "lucide-react";

export const ResultCard = ({ result }) => {
  return (
    <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-[#061525] group-hover:text-cyan-400">
          <FileText size={22} />
        </div>

        <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">
          {result.category}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#061525] transition-colors duration-300 group-hover:text-blue-600">
        {result.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        {result.description}
      </p>

      <div className="mt-6 border-t border-gray-100 pt-5">
        <button
          type="button"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3"
        >
          View Information
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
};