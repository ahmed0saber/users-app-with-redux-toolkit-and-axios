import { createContext, useContext, useState } from "react";

const CountContext = createContext()

export default function CountProvider({ children }) {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    return (
        <CountContext.Provider value={{ count, increaseCount }}>
            {children}
        </CountContext.Provider>
    )
}

export function useCount() {
    const { count } = useContext(CountContext)

    return count
}

export function useIncreaseCount() {
    const { increaseCount } = useContext(CountContext)

    return increaseCount
}
