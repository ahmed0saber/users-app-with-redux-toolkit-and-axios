import axios from "axios";
import { useSelector } from "react-redux";

export default function useAxios() {
    const auth = useSelector(state => state.auth.value)

    const instance = axios.create({
        baseURL: 'https://dummyjson.com',
        headers: {
            'Authorization': `Bearer ${auth?.token}`,
        }
    });

    return instance
}
