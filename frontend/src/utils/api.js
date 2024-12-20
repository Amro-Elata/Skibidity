import axios from 'axios';

// Purpose: Handle API calls
const API_BASE = 'http://localhost/api';

export const loginUser = async (email, password) => {
    const response = await axios.post(`${API_BASE}/auth/login.php`, { email, password });
    return response.data;
};

export const registerUser = async (email, password) => {
    const response = await axios.post(`${API_BASE}/auth/register.php`, { email, password });
    return response.data;
};

export const fetchPosts = async () => {
    const response = await axios.get(`${API_BASE}/posts/get_posts.php`);
    return response.data;
};

export const sendMessage = async (message) => {
    const response = await axios.post(`${API_BASE}/chat/send_message.php`, { message });
    return response.data;
};

export const fetchMessages = async () => {
    const response = await axios.get(`${API_BASE}/chat/fetch_messages.php`);
    return response.data;
};

// To develop further: Add error handling and token-based authentication for secure requests.
