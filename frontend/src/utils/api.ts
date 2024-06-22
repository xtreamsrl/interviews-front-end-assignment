const BASE_URL = 'http://localhost:8080';

export const fetchRecipes = async () => {
  const response = await fetch(`${BASE_URL}/recipes`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  const data = await response.json();
  return data;
}

export const fetchCuisines = async () => {
  const response = await fetch(`${BASE_URL}/cuisines`);
  if (!response.ok) {
    throw new Error('Failed to fetch cuisines');
  }
  const data = await response.json();
  return data;
}

export const fetchDifficulties = async () => {
  const response = await fetch(`${BASE_URL}/difficulties`);
  if (!response.ok) {
    throw new Error('Failed to fetch difficulties');
  }
  const data = await response.json();
  return data;
}

export const fetchDiets = async () => {
  const response = await fetch(`${BASE_URL}/diets`);
  if (!response.ok) {
    throw new Error('Failed to fetch diets');
  }
  const data = await response.json();
  return data;
}
