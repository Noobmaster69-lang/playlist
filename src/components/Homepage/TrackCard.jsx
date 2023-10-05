import { useDispatch } from "react-redux"
import { addTrack } from "../../store/slices/tracks.slice"
import { Link, useNavigate } from "react-router-dom"

const TrackCard = ({ track }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const handleAddTrack = () => {
        dispatch(addTrack(track))
    }

    const handleArtist = (id) => {
        navigate(`/artist/${id}`)
    }

  return (
    <section>
        <header>
            <img src={track.album.images[0].url} alt="" />
        </header>
        <article>
            <Link to={`/track/${track.id}`}><h3>{track.name}</h3></Link>
            <ul>
                {
                    track.artists.map(artist => (
                        <li 
                        onClick={() => handleArtist(artist.id)}
                         key={artist.id}
                         >{artist.name} </li>
                    ))
                }
            </ul>
        </article>
        <footer>
        <a target="_blank" href={track.external_urls.spotify}>
            <i className='bx bxl-spotify'></i>
        </a>
        <button onClick={handleAddTrack}>
        <i className='bx bx-plus-circle'></i>
        </button>
        </footer>
    </section>
  )
}

export default TrackCard