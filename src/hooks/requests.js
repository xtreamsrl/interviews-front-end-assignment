const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return await response.json();
};
