import { Cuisine } from '../../utils/types';

export const cuisinesAPI = async (): Promise<Cuisine[]> => {
  const response = await fetch(`http://localhost:8080/cuisines`);
  if (!response.ok) {
    throw new Error('Failed to fetch cuisines');
  }
  const data = await response.json();
  return data;
}
