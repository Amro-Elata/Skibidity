import React, { createContext, useState } from 'react';

// Purpose: Provide global authentication state
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// To develop further: Integrate token storage and automatic session refresh logic.
