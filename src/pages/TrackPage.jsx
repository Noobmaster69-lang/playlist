import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect} from "react"
import TrackInfo from "../components/TrackPage/TrackInfo"
import TracksRelated from "../components/TrackPage/TrackRelated"

const TrackPage = () => {
  
  const  { id } = useParams()

  const  [ track, getTrack ] = useFetch()

  
  useEffect (() => {
    getTrack(`/api/tracks/${id}`)
  }, [id]);
  
  const navigate = useNavigate()
  
  const handleBack = () => {
    navigate(-1);
  };
  

  return (
    <div>
      <div onClick={handleBack}>back</div>
    <TrackInfo
    track={track}
    />
    <TracksRelated 
      artist={track?.artists[0].name}
    />
    </div>
   )
  }

export default TrackPage