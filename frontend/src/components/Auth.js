import React, { useState } from 'react';
import { loginUser, registerUser } from '../utils/api';

// Purpose: Handle user authentication (Login/Register)
const Auth = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAuth = async () => {
        try {
            if (isRegistering) {
                await registerUser(email, password);
                alert('Registration successful. Please log in.');
            } else {
                await loginUser(email, password);
                alert('Login successful!');
            }
        } catch (error) {
            console.error('Authentication error:', error);
            alert('An error occurred during authentication.');
        }
    };

    return (
        <div>
            <h2>{isRegistering ? 'Register' : 'Login'}</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleAuth}>{isRegistering ? 'Register' : 'Login'}</button>
            <button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default Auth;

// To develop further: Add password reset functionality, OAuth login options, and validation for user inputs.
