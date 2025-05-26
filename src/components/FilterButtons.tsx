import React from "react";

interface FilterButtonsProps {
  filters: { id: string; name: string }[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export default function FilterButtons({
  filters,
  activeFilter,
  setActiveFilter,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeFilter === filter.id
              ? "bg-amber-500 text-black"
              : "bg-gray-800 text-white hover:bg-gray-700"
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}
