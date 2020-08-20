import cheerio from "cheerio";

export const fetchComedianActors = async () => {
  const array = [];
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://www.imdb.com/list/ls051583078/?sort=list_order,asc&mode=detail&page=1"
  );

  const text = await response.text();
  const $ = cheerio.load(text);

  $(
    ".lister-item.mode-detail > .lister-item-content >                 .lister-item-header"
  ).each((i, el) => {
    $(el)
      .text()
      .split("↵")
      .forEach((el) => {
        array.push(el.slice(22));
      });
  });
  return array;
};
