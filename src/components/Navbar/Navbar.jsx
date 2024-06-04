import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { useAuth } from '../../context/AuthContext'
import { useSelector } from 'react-redux'

export default function Navbar() {
    // const { auth } = useAuth()
    const auth = useSelector(state => state.auth.value)
    console.log("Navbar Rerendered !")

    return (
        <header className={styles.navbar}>
            <span className={styles.text}>Navbar</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {auth ? (
                    <Link to="/profile">{auth.username}</Link>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </nav>
        </header>
    )
}
