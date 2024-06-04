import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import Cookies from "js-cookie"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../../redux/authSlice"
import useAxios from "../../hooks/useAxios"

export default function Profile() {
    // const { auth, setAuth } = useAuth()
    const auth = useSelector(state => state.auth.value)
    const [userProfile, setUserProfile] = useState({})
    const dispatch = useDispatch()
    console.log("Profile Rerendered")
    const axiosInstance = useAxios()

    useEffect(() => {
        axiosInstance.get('/auth/me')
            .then(res => setUserProfile(res.data))
    }, [])

    const logoutUser = () => {
        Cookies.remove('auth')
        // setAuth(null)
        dispatch(removeUser())
    }

    return (
        <div>
            <img src={userProfile.image} alt="" />
            <h1>{userProfile.firstName} {userProfile.lastName}</h1>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
}
