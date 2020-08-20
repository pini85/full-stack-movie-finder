const subtitlesApi = async id => {
  const OS = require("opensubtitles-api");
  const OpenSubtitles = new OS({
    useragent: "pini85",
    username: "pini85",
    password: "memory00",
    ssl: true
  });

  const subtitles = await OpenSubtitles.search({
    imdbid: id,
    sublanguageid: "eng",
    gzip: false
  });
  if (Object.keys(subtitles).length === 0) {
    return;
  }

  return subtitles.en.url;
};

export default subtitlesApi;
