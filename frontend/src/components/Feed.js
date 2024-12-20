import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../utils/api';

// Purpose: Display all posts in a feed format
const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await fetchPosts();
                setPosts(response.data);
            } catch (error) {
                console.error('Error loading posts:', error);
            }
        };
        loadPosts();
    }, []);

    return (
        <div>
            <h1>Feed</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.user}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Feed;

// To develop further: Add pagination, like/comment functionality, and better styling.
