import { Search, X } from "lucide-react";
import { HeadingAnimation } from "../animations/HeadingAnimation";


export const SearchSection = ({ searchQuery, setSearchQuery }) => {
  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <section
      id="search"
      className="relative min-h-[calc(60vh-20px)] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <HeadingAnimation>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061525] text-cyan-400 shadow-lg shadow-blue-100">
              <Search size={25} strokeWidth={2} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              NSTU Smart Search
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#061525] sm:text-4xl lg:text-5xl">
              Find Information
              <span className="block text-blue-600">
                Faster & Easier
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base lg:text-lg">
              Quickly search for admissions, departments, notices,
              scholarships, academic resources, and other important
              university information.
            </p>
          </div>
        </HeadingAnimation>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl" />

            <div className="relative flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-2 shadow-xl shadow-blue-100/40 transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-2xl">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Search size={21} />
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search NSTU information..."
                className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm font-medium text-[#061525] outline-none placeholder:text-gray-400 sm:text-base"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={handleClear}
                  aria-label="Clear search"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-gray-400 transition-all duration-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              )}

              <button
                type="button"
                className="hidden rounded-xl bg-[#061525] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:block"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
          <span className="mr-1 font-medium text-gray-500">
            Popular searches:
          </span>

          {popularSearches.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSearchQuery(item)}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 font-medium text-gray-600 shadow-sm transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              {item}
            </button>
          ))}
        </div> */}

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-4 text-center shadow-sm">
            <p className="text-sm font-bold text-[#061525]">
              Instant Search
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Find relevant information quickly
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-100 bg-white/80 p-4 text-center shadow-sm">
            <p className="text-sm font-bold text-[#061525]">
              Category Based
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Browse results by category
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white/80 p-4 text-center shadow-sm">
            <p className="text-sm font-bold text-[#061525]">
              Easy Discovery
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Get useful results in seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};