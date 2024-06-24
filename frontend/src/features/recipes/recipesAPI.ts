import { Recipe } from '../../utils/types';

export const recipesAPI = async (): Promise<Recipe[]> => {
  const response = await fetch(`http://localhost:8080/recipes`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = await response.json();
  return data;
}
