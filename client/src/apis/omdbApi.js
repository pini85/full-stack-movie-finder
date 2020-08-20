const omdbApi = async imdbId => {
  const apiKey = "c9f0874f";
  const response = await fetch(
    `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`
  );
  const data = await response.json();
  return data;
};

export default omdbApi;
