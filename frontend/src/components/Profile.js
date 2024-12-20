import React from 'react';

// Purpose: Display user profile information
const Profile = ({ user }) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Posts: {user.postCount}</p>
        </div>
    );
};

export default Profile;

// To develop further: Add profile editing functionality and user activity tracking.
