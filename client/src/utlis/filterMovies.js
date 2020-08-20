import { tmdbIdApi } from "../apis/tmdbApi";
export const filterMovies = async (data) => {
  const page = data.page;
  const total_results = data.total_results;
  const total_pages = data.total_pages;
  const results = await Promise.all(
    data.results.map(async (movie) => await tmdbIdApi(movie.id))
  );
  const filteredResults = results.filter((movie) => {
    return movie.imdb_id;
  });

  const obj = {
    page,
    total_results,
    total_pages,
    results: filteredResults,
  };
  return obj;
};

export const filterActors = async (data) => {
  const page = data.page;
  const total_results = data.total_results;
  const total_pages = data.total_pages;
  const results = data.results;
  const filter = results.filter((actor) => {
    return (
      actor.known_for[0].media_type !== "tv" &&
      actor.known_for_department === "Acting"
    );
  });
};
