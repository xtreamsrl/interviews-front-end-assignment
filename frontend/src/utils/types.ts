export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  cuisineId: number;
  dietId: number;
  difficultyId: number;
  image: string;
}
