import { useState } from 'react';
import AddSong from '../AddSong/AddSong';
import SongListContainer from '../SongListContainer/SongListContainer';

const SongOverview = () => {
  const [songs, setSongs] = useState([]);

  const handleSubmitSong = (title, artist, genre, stars) => {
    const newSong = { id: new Date, title: title, artist: artist, genre: genre, stars: stars};
 
    setSongs((songItems) => [...songItems, newSong]);
  };

  return (
    <div>
      <AddSong onSubmit={handleSubmitSong} />
      <SongListContainer songs={songs} setSongs={setSongs}/>
    </div>
  );
};

export default SongOverview;