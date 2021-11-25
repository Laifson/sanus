import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
    const { token } = useContext(AuthContext)

    return token ? children : <Navigate to='/login' />
}
