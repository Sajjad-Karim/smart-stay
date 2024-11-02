// pages/AccommodationSearchPage.js
import React, { useState } from "react";
import AdvancedSearchFilters from "@/components/advancedSearch";

const AccommodationSearchPage = () => {
  const [searchFilters, setSearchFilters] = useState(null);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
    console.log("Applied Filters:", filters);
    // Here you can use filters to make an API call to fetch accommodations
  };

  return (
    <div className="accommodation-search-page p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Search Accommodations
      </h1>
      <AdvancedSearchFilters onSearch={handleSearch} />

      {/* Render search results based on searchFilters */}
      {searchFilters && (
        <div className="search-results mt-8">
          <h2 className="text-2xl font-semibold mb-4">Search Results:</h2>
          {/* Map over results and display them */}
          {/* Example placeholder for results */}
          <p>Displaying results for selected filters...</p>
        </div>
      )}
    </div>
  );
};

export default AccommodationSearchPage;
