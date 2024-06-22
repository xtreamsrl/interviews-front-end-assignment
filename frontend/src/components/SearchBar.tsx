import { useState } from "react";
import { Cuisine, Difficulty } from "../utils/types";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onCuisineChange: (cuisineId: Cuisine["id"]) => void;
  cuisines: Cuisine[];
  onDifficultyChange: (difficultyId: Difficulty["id"]) => void;
  difficulties: Difficulty[];
}

const SearchBar = ({ onSearch, onCuisineChange, cuisines, onDifficultyChange, difficulties }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim().toLowerCase());
  };

  const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onCuisineChange(value);
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onDifficultyChange(value);
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Search recipes..."
      />
      <select
        id="cuisine-picker"
        onChange={handleCuisineChange}
        className="p-2 border border-gray-300 rounded mt-2 w-full"
      >
        <option value="">All Cuisines</option>
        {cuisines.map((cuisine) => (
          <option key={cuisine.id} value={cuisine.id}>
            {cuisine.name}
          </option>
        ))}
      </select>
      <select
        id="difficulty-picker"
        onChange={handleDifficultyChange}
        className="p-2 border border-gray-300 rounded mt-2 w-full"
      >
        <option value="">All Difficulties</option>
        {difficulties.map((difficulty) => (
          <option key={difficulty.id} value={difficulty.id}>
            {difficulty.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
