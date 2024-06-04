import { useIncreaseCount } from "../../../../context/CountContext"

export default function CountBtn() {
    const increaseCount = useIncreaseCount()
    console.log("CountBtn Rerendered !")

    return (
        <div>
            <button
                onClick={increaseCount}
            >click here</button>
        </div>
    )
}
