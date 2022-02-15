export const filterSongs = (star, songs, setSongs) => {
  const allFilterdSongs = songs.filter(song => star === song.stars);

  setSongs(allFilterdSongs);
   console.log(allFilterdSongs)
};