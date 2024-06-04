import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const getAuthCookie = () => {
    const authCookie = Cookies.get('auth')
    if (authCookie) {
        return JSON.parse(authCookie)
    }

    return null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: getAuthCookie()
    },
    reducers: {
        setUser: (state, action) => {
            console.log({ action })
            state.value = action.payload
            Cookies.set('auth', JSON.stringify(action.payload), { expires: 1 })
        },
        removeUser: (state) => {
            state.value = null
        },
    }
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer
