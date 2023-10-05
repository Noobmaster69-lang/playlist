import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import TrackCard from "../Homepage/TrackCard"

const TracksRelated = ( { artist}  ) => {

  const [ tracksLists, getTracksLists  ] = useFetch()

  useEffect(() => {
    if(artist){
      getTracksLists(`/api/tracks?limit=10&q=${artist}`)
    }
  }, [artist])

  return (
    <section>
     <h3>Track Related</h3>
     <div>
      {
        tracksLists?.tracks.items.map(track => (
          <TrackCard 
          key={track.id}
          track={track}
          />
        ))
      }
     </div>
    </section>
  )
}

export default TracksRelated