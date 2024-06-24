import { Diet } from '../../utils/types';

export const dietsAPI = async (): Promise<Diet[]> => {
  const response = await fetch(`http://localhost:8080/diets`);
  if (!response.ok) {
    throw new Error('Failed to fetch diets');
  }
  const data = await response.json();
  return data;
}
