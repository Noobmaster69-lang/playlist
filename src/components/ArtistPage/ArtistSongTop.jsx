import TrackCard from "../Homepage/TrackCard"

const ArtistSongTop = ( { tracks } ) => {



  return (
    <section> 
        <h3>Artist's Songs Top</h3>
    <div>
        {
            tracks?.map(trackInfo => (
                <TrackCard 
                key={trackInfo.id}
                track={trackInfo}
                />
            ))
        }
    </div>
    </section>
  )
}

export default ArtistSongTop