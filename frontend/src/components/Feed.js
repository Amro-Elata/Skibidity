import React, { useState, useEffect } from 'react';
import { getPosts } from '../utils/api';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await getPosts();
      setPosts(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="Feed">
      {posts.map(post => (
        <div key={post.id} className="Post">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
