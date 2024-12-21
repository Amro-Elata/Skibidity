import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Chat from './components/Chat';
import "./styles/main.css";
import "./styles/theme.css";

// Purpose: Main app entry point
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/profile" element={<Profile user={{ name: 'John Doe', email: 'john@example.com', postCount: 42 }} />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
};

export default App;

// To develop further: Add route protection and dynamic user data fetching.
