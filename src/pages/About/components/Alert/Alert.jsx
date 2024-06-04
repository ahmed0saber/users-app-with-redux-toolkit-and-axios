import { useCount } from "../../../../context/CountContext"

export default function Alert() {
    const count = useCount()
    console.log("Alert Rerendered !")

    return (
        <div>
            <p>You clicked the button {count} times!</p>
        </div>
    )
}
