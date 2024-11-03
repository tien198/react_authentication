import { json } from "react-router-dom"

export const TOKEN_KEY = 'token'


export function addAuthToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}


export function getAuthToken() {
    const token = localStorage.getItem(TOKEN_KEY)
    return token
}

export function removeAuthToken() {
    localStorage.removeItem(TOKEN_KEY)
}

export function tokenLoader() {
    return getAuthToken()
}

export function isAuthenLoader() {
    const token = getAuthToken()
    if (!token)
        throw json({ message: 'You need to sign in to add new event!' }, { status: 401 })
    else
        return token
}