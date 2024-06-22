import { useState } from "react";
import { Cuisine, Difficulty, Diet } from "../utils/types";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onCuisineChange: (cuisineId: Cuisine["id"]) => void;
  cuisines: Cuisine[];
  onDifficultyChange: (difficultyId: Difficulty["id"]) => void;
  difficulties: Difficulty[];
  onDietChange: (dietId: Diet["id"]) => void;
  diets: Diet[];
}

const SearchBar = ({
  onSearch,
  onCuisineChange,
  cuisines,
  onDifficultyChange,
  difficulties,
  onDietChange,
  diets,
}: SearchBarProps) => {
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

  const handleDietChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onDietChange(value);
  }

  return (
    <div className="flex mb-4 bg-white p-3 rounded-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="pl-4 w-1/2 focus:outline-none"
        placeholder="Search recipes..."
      />
      <div className="flex flex-row w-1/2">
        <select
          id="cuisine-picker"
          onChange={handleCuisineChange}
          className="px-2 border-l-2 w-full focus:outline-none text-gray-500"
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
          className="px-2 border-l-2 w-full focus:outline-none text-gray-500"
        >
          <option value="">All Difficulties</option>
          {difficulties.map((difficulty) => (
            <option key={difficulty.id} value={difficulty.id}>
              {difficulty.name}
            </option>
          ))}
        </select>
        <select
          id="diet-picker"
          onChange={handleDietChange}
          className="px-2 border-l-2 w-full focus:outline-none text-gray-500"
        >
          <option value="">All Diets</option>
          {diets.map((diet) => (
            <option key={diet.id} value={diet.id}>
              {diet.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
