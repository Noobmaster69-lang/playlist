import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import { setTracksSlice } from "../store/slices/tracks.slice"
import { useDispatch } from "react-redux"


const usePlaylist = () => {

    const [playlist, setPlaylist] = useState([])

    const dispatch = useDispatch()

    const baseUrl = 'https://playlist-share-dev.fl0.io'

    const getPlaylist =  () => {
        const url = `${baseUrl}/api/playlists/me`
        axios.get(url, getConfigToken())
        .then(res => setPlaylist(res.data))
        .catch(err => console.log(err))
    }

    const postPlaylist = (data) => {
        const url = `${baseUrl}/api/playlists`
        axios.post(url, data, getConfigToken())
        .then(res => { 
            console.log(res.data)
            setPlaylist([ ...playlist, res.data.info ])
            dispatch(setTracksSlice([]))
        })
        .catch(err => console.log(err))
    }

    const deletePlaylist = () => {
        const url = `${baseUrl}/api/playlists/${id}`
        axios.delete(url, getConfigToken())
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return { playlist, getPlaylist, postPlaylist, deletePlaylist }  

}


export default usePlaylist