import { useRef } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/authSlice"
import useAxios from "../../hooks/useAxios"

export default function Login() {
    const usernameInputRef = useRef()
    const passwordInputRef = useRef()
    // const { setAuth } = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log("Login Rerendered")
    const axiosInstance = useAxios()

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log({
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value,
        })
        const res = await axiosInstance.post('/auth/login', {
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value,
            expiresInMins: 1440
        }, {
            headers: { 'Content-Type': 'application/json' },
        })
        console.log({ res })
        // setAuth(data)
        dispatch(setUser(res.data))
        navigate("/profile")
    }

    return (
        <div>
            <h1>Login to continue</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis, nesciunt cupiditate explicabo hic eaque?</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="username"
                    placeholder="Enter your username"
                    ref={usernameInputRef}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    ref={passwordInputRef}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
