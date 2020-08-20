import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTorrents } from "../../redux/actions";

const ShowTorrents = ({ fetchTorrents, torrents }) => {
  console.log("im clicked");
  useEffect(() => {
    const fetchData = async () => {
      await fetchTorrents();
    };
    fetchData();
  }, [fetchTorrents]);

  return (
    torrents &&
    torrents.map((torrent) => {
      return (
        <div>
          {}
          <div>
            Url: <a href={torrent.url}>link!!!</a>
          </div>
          <div>seeds: {torrent.seeds}</div>
          <div>peers: {torrent.peers}</div>
          <div>size:{torrent.size}</div>
          <div>type:{torrent.type}</div>
        </div>
      );
    })
  );
};
const mapStateToProps = (state) => ({
  torrents: state.fetchTorrents,
});
export default connect(mapStateToProps, {
  fetchTorrents: fetchTorrents,
})(ShowTorrents);
