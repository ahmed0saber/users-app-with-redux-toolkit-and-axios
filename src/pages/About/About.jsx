import CountContainer from "./components/CountContainer/CountContainer"
import Heading from "./components/Heading/Heading"
import CountProvider from "../../context/CountContext"

export default function About() {
    console.log("About Rerendered !")

    return (
        <div>
            <CountProvider>
                <Heading />
                <CountContainer />
            </CountProvider>
        </div>
    )
}
