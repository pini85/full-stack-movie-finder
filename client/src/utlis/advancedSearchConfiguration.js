export const advancedSearchRunTime = (runTime) => {
  switch (runTime) {
    case 60:
      return "&with_runtime.lte=90";
    case 90:
      return "&with_runtime.gte=90&with_runtime.lte=120";
    case 120:
      return "&with_runtime.gte=120&with_runtime.lte=180";
    case 180:
      return "&with_runtime.gte=180";
    default:
      return "";
  }
};

export const advancedSearchRating = (rating) => {
  switch (rating) {
    case 9:
      return "&vote_average.gte=9";
    case 8:
      return "&vote_average.gte=8";
    case 7:
      return "&vote_average.gte=7";
    case 6:
      return "&vote_average.gte=6";
    case 5:
      return "&vote_average.gte=5";
    case 4:
      return "&vote_average.gte=4";
    case 3:
      return "&vote_average.gte=3";
    case 2:
      return "&vote_average.gte=2";
    case 1:
      return "&vote_average.gte=1";

    default:
      return "";
  }
};

export const advancedSearchVotes = (votes) => {
  switch (votes) {
    case 20000:
      return "&vote_count.gte=20000";
    case 15000:
      return "&vote_count.gte=15000";
    case 10000:
      return "&vote_count.gte=10000";
    case 9000:
      return "&vote_count.gte=9000";
    case 8000:
      return "&vote_count.gt=8000";
    case 7000:
      return "&vote_count.gte=7000";
    case 6000:
      return "&vote_count.gte=6000";
    case 5000:
      return "&vote_count.gte=5000";
    case 4000:
      return "&vote_count.gte=4000";
    case 3000:
      return "&vote_count.gte=3000";
    case 2000:
      return "&vote_count.gte=2000";
    case 1000:
      return "&vote_count.gte=1000";
    case 500:
      return "&vote_count.gte=500";
    case 100:
      return "&vote_count.gte=100";
    default:
      return "";
  }
};

// export const advancedSearchGenres = (genres) => {
//   switch (genres) {
//     case "Action":
//       return "with_genres=28";
//   }
// };

export const advancedSearchCast = (cast) => {
  console.log("cast", cast);

  if (cast.length < 1) return "";
  let string = "&with_cast=";
  const option = cast.option === "and" ? "," : "||";
  if (cast.length === 1) {
    return (string += [cast[0]]);
  }
  string += cast[0];
  cast.slice(1).map((actor) => {
    return (string += option + actor);
  });

  return string;
};
export const displayFromYear = (value) => {
  if (value) {
    return `&primary_release_date.gte=${value}-01-01`;
  } else {
    return "";
  }
};
export const displayToYear = (value) => {
  if (value) {
    return `&primary_release_date.lte=${value}-01-01`;
  } else {
    return "";
  }
};

export const advancedSearchSortBy = (value) => {
  switch (value) {
    case "vote-average":
      return "&sort_by=vote_average.desc";
    default:
      return "&sort_by=vote_average.desc";
  }
};
export const displayGenre = (value) => {
  if (value) {
    return `&with_genres=${value}`;
  } else {
    return "";
  }
};
