import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <nav className="flex h-[76px] items-center justify-between gap-6">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#061525] text-sm font-bold text-white shadow-md">
              NSTU
            </div>

            <div className="hidden sm:block">
              <h1 className="text-sm font-bold leading-tight text-[#061525]">
                Noakhali Science and
              </h1>

              <p className="mt-0.5 text-xs font-semibold text-gray-500">
                Technology University
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <a
              href="#about"
              className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              About
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#academics"
              className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Academics
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#departments"
              className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Departments
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#admissions"
              className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Admissions
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>

            <a
              href="#notices"
              className="group relative py-2 text-sm font-semibold text-gray-600 transition-colors duration-300 hover:text-blue-600"
            >
              Notices
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/search"
              aria-label="Search NSTU information"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <Search size={19} />
            </Link>

            <a
              href="#contact"
              className="rounded-xl bg-[#061525] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700"
            >
              Student Portal
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[#061525] lg:hidden"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {isOpen && (
          <div className="pb-5 lg:hidden">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-blue-600"
              >
                About
              </a>

              <a
                href="#academics"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-blue-600"
              >
                Academics
              </a>

              <a
                href="#departments"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-blue-600"
              >
                Departments
              </a>

              <a
                href="#admissions"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-blue-600"
              >
                Admissions
              </a>

              <a
                href="#notices"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white hover:text-blue-600"
              >
                Notices
              </a>

              <Link
                to="/search"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700"
              >
                <Search size={17} />
                Search
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};