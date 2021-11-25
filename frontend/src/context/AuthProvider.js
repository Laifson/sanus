import {createContext, useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

export default function AuthProvider({children}) {
    const [token, setToken] = useState()
    const navigate = useNavigate()

    const login = credentials => {
        axios
            .post('/auth/login', credentials)
            .then(res => res.data)
            .then(setToken)
            .then(() => navigate('/'))
            .catch(error => console.error(error.message))
    }

    const loginWithGithub = code => {
        axios.post("/auth/github/login", {code})
            .then(res => res.data)
            .then(setToken)
            .then(() => navigate('/'))
            .catch(error => console.error(error.message))
    }

    return (
        <AuthContext.Provider value={{token, login, loginWithGithub}}>
            {children}
        </AuthContext.Provider>
    )
}
