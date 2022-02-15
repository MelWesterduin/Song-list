export const sortByTitle = (songs, setSongs) => {
  const sortedSongs = [...songs].sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });

  setSongs(sortedSongs);
};

export const sortByStars = (songs, setSongs) => {
  const sortedStars = [...songs].sort((a, b) => {
    if (a.stars < b.stars) {
      return -1;
    }
    if (a.stars > b.stars) {
      return 1;
    }
    return 0;
  });

  setSongs(sortedStars);
};