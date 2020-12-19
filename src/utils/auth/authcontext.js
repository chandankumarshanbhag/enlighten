import React, { createContext, useState, useContext, useEffect } from 'react'
import Http, { ResponseCodes } from "utils/http"

const AuthContext = createContext({});
//All Client-Side
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            let auth_token = sessionStorage.getItem("auth_token");
            if (auth_token) {
                new Http("/auth/validate", { auth_token })
                    .onResponse(({data}) => {
                        if (data.code == ResponseCodes.AUTH_VALID_TOKEN) {
                            setTimeout(() => {
                                setUser({});
                                setLoading(false);
                            }, 1000)
                        }
                        else {
                            setUser(null);
                            setLoading(false);
                            sessionStorage.removeItem("auth_token");
                            alert()
                        }
                    }).onError((e) => {
                        console.log(e)
                        sessionStorage.removeItem("auth_token")
                        setLoading(false);
                        setUser(null);
                    });
            }
            else {
                setLoading(false);
                setUser(null);
            }
        }
        loadUserFromCookies()
    }, [])

    const login = (user) => {
        new Http("/auth/login", { username: user.username, password: user.password })
            .onResponse(({data}) => {
                if(data.code == ResponseCodes.AUTH_SUCCESSFUL){
                    setUser(data.data.user);
                    sessionStorage.setItem("auth_token", data.data.token);
                }
                else{
                    
                }
            }).onError(() => {
                setUser(null);
                sessionStorage.removeItem("auth_token")
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
    return (function (props) {
        return <Component {...props} auth={context} />;
    });
};