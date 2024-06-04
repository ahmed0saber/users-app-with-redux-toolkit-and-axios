import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Users() {
    const [users, setUsers] = useState([])
    console.log("Users Rerendered !")

    useEffect(() => {
        fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(data => setUsers(data.data))
    }, [])

    return (
        <div>
            {users.map(user => (
                <div key={user.id} style={{ padding: "12px", border: "1px solid #121212" }}>
                    <h2>{user.first_name} {user.last_name}</h2>
                    <Link to={`/users/${user.id}`}>View Profile</Link>
                </div>
            ))}
        </div>
    )
}
