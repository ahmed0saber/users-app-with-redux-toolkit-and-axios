import { useCount } from "../../../../context/CountContext"

export default function Heading() {
    const count = useCount()
    console.log("Heading Rerendered !")

    return (
        <h1>About Page: {count}</h1>
    )
}
