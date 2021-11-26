import {createContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

const initialState = {
    username: '',
    password: '',
}

export default function AuthProvider({children}) {
    const [token, setToken] = useState();
    const navigate = useNavigate()
    const [user, setUser] = useState();
    const [credentials, setCredentials] = useState(initialState);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(loggedInUser);
            console.log(loggedInUser)
        }
    }, []);

    const login = () => {
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
        <AuthContext.Provider value={{token, login, loginWithGithub, user, setUser, credentials, setCredentials}}>
            {children}
        </AuthContext.Provider>
    )
}
