export const deleteSongFromList = (id, setSongs) => {
    setSongs(songs => songs.filter(song => song.id !== id));
};