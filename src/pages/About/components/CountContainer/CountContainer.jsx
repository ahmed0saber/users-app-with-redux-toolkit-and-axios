import Alert from "../Alert/Alert";
import CountBtn from "../CountBtn/CountBtn";

export default function CountContainer() {
    console.log("CountContainer Rerendered !")

    return (
        <>
            <Alert />
            <CountBtn />
        </>
    )
}
