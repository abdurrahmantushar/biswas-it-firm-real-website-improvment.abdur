import { useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { Navbar } from "../components/Navbar";
import { SearchSection } from "../components/SearchSection";
import { useDebounce } from "../hooks/useDebounce";
import { SearchResults } from "../components/SearchResult";

export const SearchHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Results");

  const debouncedSearch = useDebounce(searchQuery, 500);

  return (
<main>
  <Navbar />

  <div className="mx-auto grid max-w-8xl grid-cols-1 gap-8 px-6  sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10">
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </aside>

    <div className="min-w-0">
      <SearchSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <SearchResults
        searchQuery={debouncedSearch}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
      />
    </div>
  </div>
</main>
  );
};
