import axios from "axios"
import { setCredentialsSlice } from "../store/slices/credentials.slice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const useAuth = () => {
    
    const baseUrl = 'https://playlist-share-dev.fl0.io'

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginUser = (data) => {
        const url = `${baseUrl}/api/auth/login`
        axios.post(url, data)
         .then(res => {
        console.log(res.data)
        const token = res.data.token
        const username = res.data.username
        const email = res.data.email
        localStorage.setItem("token", token)
        localStorage.setItem("username", username)
        localStorage.setItem("email", email)
        const obj = { token, username, email }
          dispatch(setCredentialsSlice(obj))
          navigate('/')
        })
         .catch(err => {
            console.log(err)
            dispatch(setCredentialsSlice(null))
            localStorage.removeItem("token")
            localStorage.removeItem("username")
            localStorage.removeItem("email")
            })
    }

    const registerUser = (data) => {
        const url = `${baseUrl}/api/auth/register`
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return { loginUser, registerUser }
}

export default useAuth