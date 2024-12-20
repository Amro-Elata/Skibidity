import axios from 'axios';

// Purpose: API client for making requests to the backend
const apiClient = axios.create({
  baseURL: 'http://localhost/api',
});

export const fetchPosts = async () => {
  const response = await apiClient.get('/posts/get_posts');
  return response.data;
};

export const createPost = async (content) => {
  const response = await apiClient.post('/posts/create_post', { content });
  return response.data;
};

export default apiClient;
