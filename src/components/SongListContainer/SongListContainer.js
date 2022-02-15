import { useState } from 'react';
import { sortByStars, sortByTitle } from '../../utils/sort';
import { groupBy } from '../../utils/groupBy';
import { filterSongs } from '../../utils/filter';
import { GENRE_SELECTOR, STAR_SELECTOR } from '../../constants/selectors';
import SongList from '../SongList/SongList';
import Selector from '../Selector/Selector';
import './SongListContainer.css';

const SongListContainer = ({ songs, setSongs }) => {
  const [genre, setGenre] = useState();
  const songsGroupedByGenre = groupBy(songs, 'genre');
  
  return (
    <div className='container'><hr></hr>
      <div className='sort'>
        <div>Sort by:</div>
        <input type="checkbox" onClick={() => sortByTitle(songs, setSongs)} /> Title: A-Z
        <input type="checkbox" onClick={() => sortByStars(songs, setSongs)} /> Stars: 1-5 <br/> 
      </div> <br/>
      <span>Filter by: Genre </span><Selector onChange={(genre) => setGenre(genre) } selector={GENRE_SELECTOR} /> 
      <span> or Stars </span> <Selector onChange={(star) => filterSongs(star, songs, setSongs)} selector={STAR_SELECTOR}/> <hr></hr>
    {(genre === 'pop' || !genre) && <SongList songs={songsGroupedByGenre.pop} title='Pop' setSongs={setSongs} />}
    {(genre === 'rock' || !genre) &&  <SongList songs={songsGroupedByGenre.rock} title='Rock' setSongs={setSongs} />}
    {(genre === 'hiphop' || !genre) &&  <SongList songs={songsGroupedByGenre.hiphop} title='HipHop' setSongs={setSongs} />}
    </div>
  );
};

export default SongListContainer;