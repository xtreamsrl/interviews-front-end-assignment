import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getRecipes = () => {
    return axios.get(`${BASE_URL}/recipes`)
        .then(res => res.data)
        .catch(err => {
            console.error("Error fetching recipes:", err);
            throw err;
        });
};

export const getComments = () => {
    return axios.get(`${BASE_URL}/comments`)
        .then(res => res.data)
        .catch(err => {
            console.error("Error fetching comments:", err);
            throw err;
        });
};

export const getDifficulties = () => {
    return axios.get(`${BASE_URL}/difficulties`)
        .then(res => res.data)
        .catch(err => {
            console.error("Error fetching difficulties:", err);
            throw err;
        });
};

export const getDiets = () => {
    return axios.get(`${BASE_URL}/diets`)
        .then(res => res.data)
        .catch(err => {
            console.error("Error fetching diets:", err);
            throw err;
        });
};

export const getCuisines = () => {
    return axios.get(`${BASE_URL}/cuisines`)
        .then(res => res.data)
        .catch(err => {
            console.error("Error fetching cuisines:", err);
            throw err;
        });
};
