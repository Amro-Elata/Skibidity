const API_BASE_URL = 'http://localhost/social-media-app/api/';

export const getPosts = async () => {
  const response = await fetch(`${API_BASE_URL}posts/get_posts.php`);
  return await response.json();
};

export const createPost = async (content) => {
  const response = await fetch(`${API_BASE_URL}posts/create_post.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content }),
  });
  return await response.json();
};
