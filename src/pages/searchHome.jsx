import { useState } from "react";
import { CategoryFilter } from "../components/CategoryFilter";
import { Navbar } from "../components/Navbar";
import { SearchResult } from "../components/SearchResult";
import { SearchSection } from "../components/searchSection";
import { useDebounce } from "../hooks/useDebounce";

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

      <SearchResult
        searchQuery={debouncedSearch}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
      />
    </div>
  </div>
</main>
  );
};