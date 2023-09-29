const TrackCard = ({ track }) => {

  return (
    <section>
        <header>
            <img src={track.album.images[0].url} alt="" />
        </header>
        <article>
            <h3>{track.name}</h3>
            <ul>
                {
                    track.artists.map(artist => (
                        <li key={artist.id}>{artist.name} </li>
                    ))
                }
            </ul>
        </article>
        <footer>
        <a target="_blank" href={track.external_urls.spotify}>
            <i className='bx bxl-spotify'></i>
        </a>
        <button>
        <i className='bx bx-plus-circle'></i>
        </button>
        </footer>
    </section>
  )
}

export default TrackCard