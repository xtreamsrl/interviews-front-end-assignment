import { Difficulty } from '../../utils/types';

export const difficultiesAPI = async (): Promise<Difficulty[]> => {
  const response = await fetch(`http://localhost:8080/difficulties`);
  if (!response.ok) {
    throw new Error('Failed to fetch difficulties');
  }
  const data = await response.json();
  return data;
}
