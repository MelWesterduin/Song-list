import Song from '../Song/Song';
import './SongList.css'

const SongList = ({ songs, setSongs, title}) => {
  return (
      <div>
      <p className='songlist-title'>{title}</p>
      <ul>
      {songs?.map((song) => (
          <Song key={song.id} song={song} setSongs={setSongs}/>
          ))}
    </ul></div>
  );
};

export default SongList;