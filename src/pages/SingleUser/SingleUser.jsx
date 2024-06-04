import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleUser() {
    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data.data))
    }, [])

    return (
        <div>
            <h1>SingleUser: {id}</h1>
            <img src={user.avatar} alt="User Picture" />
            <p>User Name: {user.first_name} {user.last_name}</p>
            <p>Email Address: {user.email}</p>
        </div>
    )
}
