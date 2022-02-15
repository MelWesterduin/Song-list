import { deleteSongFromList } from '../../utils/deleteSong';
import './Song.css';

const Song = ({ song, setSongs }) => {
  return (
    <li ><i className="fas fa-music"></i>
      <span className="title"> Title:</span> {song.title}{' '}
      <span className="title"> Artist:</span> {song.artist}{' '}
      <span className="title"> Genre:</span> {song.genre}{' '}
      <span className="title"> Stars: </span> {song.stars}{' '}
      <button className='delete' onClick={() => deleteSongFromList(song.id, setSongs)}>
        Delete
      </button>
    </li>
  );
};

export default Song;
