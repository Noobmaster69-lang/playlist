const ArtistInfo = ({ artist }) => {



  return (
    <section>
        <header>
            <img src={artist?.images[0].url} alt="" />
        </header>
        <article>
            <h2>{artist?.name}</h2>
            <ul>
                <li><span>Followers: </span><span>{artist?.followers.total} </span></li>
                <li><span>Popularity: </span><span>{artist?.popularity}</span></li>
                <li><span>Genres: </span>
                    <ul>
                        {
                          artist?.genres.map(genre => (
                            <li key={genre}>{genre}</li>
                          ))
                        }
                    </ul>
                </li>
            </ul>
        </article>
    </section>
   )
}

export default ArtistInfo