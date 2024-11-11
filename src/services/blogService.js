import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const blogService = {
  getPosts: async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  },

  createPost: async (post) => {
    const response = await axios.post(`${API_URL}/posts`, post);
    return response.data;
  },

  updatePost: async (id, post) => {
    const response = await axios.put(`${API_URL}/posts/${id}`, post);
    return response.data;
  },

  deletePost: async (id) => {
    await axios.delete(`${API_URL}/posts/${id}`);
    return id;
  },
};