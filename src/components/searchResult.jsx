import { Search } from "lucide-react";
import { CardAnimation } from "../animations/cardAnimation";
import { ResultCard } from "./ResultCard";
import { SearchData } from "../data/searchData";
import { NoResult } from "./NoResult";



export const SearchResult = ({  searchQuery, selectedCategory,setSearchQuery}) => {
  const query = searchQuery.trim().toLowerCase()

  const filteredResults = SearchData.filter((result)=>{
     const matchesCategory = selectedCategory === 'All Results' ||
     result.category === selectedCategory;

      const matchesSearch =
      query === "" ||
      result.title.toLowerCase().includes(query) ||
      result.category.toLowerCase().includes(query) ||
      result.description.toLowerCase().includes(query)
       return matchesCategory && matchesSearch;
  })
  return (
<section
      id="results"
      className="bg-[#f7fafc] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Search Results
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#061525] sm:text-3xl">
              {searchQuery ? `Results for "${searchQuery}"` : "Explore NSTU Information"}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Browse available information or refine your search by category.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
            <Search size={16} className="text-blue-600" />
            <span>{filteredResults.length} Results</span>
          </div>
        </div>

        {filteredResults.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filteredResults.map((result, index) => (
              <CardAnimation key={result.id} index={index}>
                <ResultCard result={result} />
              </CardAnimation>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <NoResult
             searchQuery={searchQuery} 
             onReset={()=>setSearchQuery("")}/>
          </div>
        )}
      </div>
    </section>
  );
};