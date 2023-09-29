import { useEffect, useRef, useState } from "react"
import useFetch from "../hooks/useFetch"
import TrackCard from "../components/Homepage/TrackCard"

const HomePages = () => {
  
    const [ listTracks, getListTracks ] = useFetch()
    const [inputValue, setInputValue] = useState('ricardo arjona')
    const [quantityPerPage, setQuantityPerPage] = useState(10)

    useEffect(() => {
     getListTracks(`/api/tracks?limit=${quantityPerPage}&q=${inputValue}`)
    }, [inputValue, quantityPerPage])

    console.log(listTracks)

    const inputSearch = useRef()
    
    const handleSearch = e => {
      e.preventDefault()
      setInputValue(inputSearch.current.value.trim().toLowerCase())
      
    }

    const hadleTrackPerPage = e => {
     setQuantityPerPage(e.target.value)
    }

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
        <input ref={inputSearch} type="text" />
        <select onChange={hadleTrackPerPage} defaultValue={10}>
          {
            [2, 4, 6, 8, 10].map(tracksPerPage => (
              <option 
              key={tracksPerPage} 
              value={tracksPerPage} 
              >{tracksPerPage}</option>
            ))
          }
        </select>
        </form>
        <div>
        {
          listTracks?.tracks.items.map(track => (
            <TrackCard 
            key={track.id}
            track={track} 
            />
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default HomePages