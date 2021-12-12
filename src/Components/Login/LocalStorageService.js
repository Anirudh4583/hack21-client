export const getToken = () => {
    return localStorage.getItem('token') || null
}


export const removeSession = () => {
    localStorage.removeItem('token')

}

export const setSession = (token) => {

    localStorage.setItem('token', token)

}