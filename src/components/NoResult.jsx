import { RotateCcw, SearchX } from "lucide-react";

export const NoResult = ({ searchQuery, onReset }) => {
  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
      <div className="max-w-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <SearchX size={30} strokeWidth={1.8} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-[#061525]">
          No Results Found
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
          {searchQuery
            ? `We couldn't find any information matching "${searchQuery}".`
            : "We couldn't find any information for the selected category."}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500">
            Try another keyword
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500">
            Try another category
          </span>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#061525] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
        >
          <RotateCcw size={16} />
          Clear Search
        </button>
      </div>
    </div>
  );
};