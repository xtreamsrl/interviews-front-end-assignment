const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const response = await fetch(`${API_URL}`);
  return await response.json();
};

export const createPost = async (title, body) => {
  fetch(`${API_URL}`, {
    method: "POST",
    body: JSON.stringify({
      title: { title },
      body: { body },
      userId: 101,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export const updatePost = async () => {
  fetch(`${API_URL}`, {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "update it",
      body: "try to update it",
      userId: 101,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
