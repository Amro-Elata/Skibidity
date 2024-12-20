import React from 'react';

// Purpose: Render an individual post
const Post = ({ user, content }) => {
    return (
        <div>
            <h3>{user}</h3>
            <p>{content}</p>
        </div>
    );
};

export default Post;

// To develop further: Add like, comment, and share buttons with backend integration.
