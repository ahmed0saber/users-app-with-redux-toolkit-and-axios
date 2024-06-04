import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import WithoutAuth from "./WithoutAuth"

const AuthRoutes = [
    {
        path: "/login",
        element: <WithoutAuth><Login /></WithoutAuth>,
    },
    {
        path: "/register",
        element: <WithoutAuth><Register /></WithoutAuth>,
    },
]

export default AuthRoutes
