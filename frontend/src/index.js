import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './context/AuthContext';

// Purpose: Render the React app
ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>,
    document.getElementById('root')
);

// To develop further: Integrate performance monitoring tools and add support for PWA.
