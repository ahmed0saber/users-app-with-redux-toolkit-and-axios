import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext()

const getAuthCookie = () => {
    const authCookie = Cookies.get('auth')
    if (authCookie) {
        return JSON.parse(authCookie)
    }

    return null
}

export default function AuthProvider({ children }) {
    const [auth, setAuth] = useState(getAuthCookie())

    useEffect(() => {
        Cookies.set('auth', JSON.stringify(auth), { expires: 1 })
    }, [auth])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const { auth, setAuth } = useContext(AuthContext)

    return { auth, setAuth }
}

// Custom Hook
