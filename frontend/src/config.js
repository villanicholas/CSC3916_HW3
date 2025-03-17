export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export const endpoints = {
    signup: `${API_BASE_URL}/signup`,
    signin: `${API_BASE_URL}/signin`,
    movies: `${API_BASE_URL}/movies`,
}; 