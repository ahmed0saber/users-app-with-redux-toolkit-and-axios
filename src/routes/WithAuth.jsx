import { useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function WithAuth({ children }) {
    // const { auth } = useAuth()
    const auth = useSelector(state => state.auth.value)

    if (auth === null) {
        return <Navigate to="/login" replace />
    }

    return (
        <>{children}</>
    )
}

// HOC => Higher-Order Component
