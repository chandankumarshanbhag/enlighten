import React, { createContext, useState, useContext, useEffect } from 'react'
import Http from "utils/http"

const AuthContext = createContext({});
//All Client-Side
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            let auth_token = sessionStorage.getItem("auth_token");
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = (user) => {
        new Http("/auth/login", { username: user.username, password: user.password })
            .onResponse((data) => {
                setUser(user)
            }).onError(() => {
                setUser(null)
            });
        }

    const logout = (email, password) => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuth() {
    const context = useContext(AuthContext);
    return context
};

export function withAuth(Component) {
    const context = useContext(AuthContext);
    return (function (props){
        return <Component {...props} auth={context} />;
    });
};