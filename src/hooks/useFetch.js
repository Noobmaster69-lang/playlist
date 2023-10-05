import axios from "axios"
import { useState } from "react"
import getConfigToken from "../services/getConfigToken"

const useFetch = () => {

  const baseUrl = 'https://playlist-share-dev.fl0.io' 

  const [infoApi, setInfoApi] = useState() 

  const getApi = (path) => {
    const url = `${baseUrl}${path}`
    axios.get(url, getConfigToken())
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }   
    return [ infoApi, getApi ]
}

export default useFetch