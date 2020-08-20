const findGenreWithId = (genres, id) => {
  const genre = genres.filter((genre) => {
    return genre.id === parseInt(id);
  });
  if (id) {
    return genre[0].name;
  }
  return;
};
export default findGenreWithId;
