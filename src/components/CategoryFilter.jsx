
import {LayoutGrid,GraduationCap,BookOpen,Building2,Bell,Award,FileText}from "lucide-react";


export const CategoryFilter = ({selectedCategory,setSelectedCategory}) => {
  const categories = [
    {
      name: "All Results",
      icon: LayoutGrid,
    },
    {
      name: "Admission",
      icon: GraduationCap,
    },
    {
      name: "Academics",
      icon: BookOpen,
    },
    {
      name: "Departments",
      icon: Building2,
    },
    {
      name: "Notices",
      icon: Bell,
    },
    {
      name: "Scholarship",
      icon: Award,
    },
    {
      name: "Forms",
      icon: FileText,
    },
  ];
  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            Browse by Category
          </p>

          <h2 className="mt-2 text-xl font-bold text-[#061525] sm:text-2xl">
            Find Information by Topic
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() => setSelectedCategory(category.name)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-[#061525] bg-[#061525] text-white shadow-md"
                    : "border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Icon size={16} />
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};