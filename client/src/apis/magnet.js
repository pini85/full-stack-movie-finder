const magnet = (name, hash, url) => {
  return `magnet:?xt=urn:btih:${hash}&dn=${url}+Encoded+Movie+${name}&tr=http://track.one:1234/announce&tr=udp://track.two:80`;
};
export default magnet;
