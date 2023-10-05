
const AlbumCard = ( { album } ) => {

    const yearReleaseDate = (new Date (album.release_date)).getFullYear()


  return (
    <article>
        <header>
            <img src={album.images[0].url} alt=""/>
        </header>
        <h4>{album.name}</h4>
        <span>{yearReleaseDate}</span>
    </article>
  )
}

export default AlbumCard