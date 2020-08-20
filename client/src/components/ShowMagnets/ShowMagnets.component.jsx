import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchMagnets } from "../../redux/actions";

const ShowMagnets = ({ fetchMagnets, magnets }) => {
  useEffect(() => {
    const fetchData = async () => {
      await fetchMagnets();
    };
    fetchData();
  }, [fetchMagnets]);

  return (
    <div>
      {magnets &&
        magnets.map((magnet) => {
          console.log(magnet);

          return <a href={magnet}>MAGNET</a>;
        })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  magnets: state.fetchMagnets,
});

export default connect(mapStateToProps, {
  fetchMagnets: fetchMagnets,
})(ShowMagnets);

// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { fetchMagnets } from "../../redux/actions";
// import { tmdbIdApi } from "../../apis/tmdbApi";
// import { omdbApi } from "../../apis/omdbApi";
// import torrentApi from "../../apis/torrentApi";

// const ShowMagnets = props => {
//   const [torrentData, setTorrentData] = useState(null);
//   const [magnets, setMagnets] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       const tmdbData = await tmdbIdApi(props.id);
//       const omdbData = await omdbApi(tmdbData.imdb_id);
//       const torrentData = await torrentApi(tmdbData.imdb_id);
//       setTorrentData(torrentData);
//       const x = torrentData.map(torrent => {
//         return setMagnets(omdbData.Title, torrent.hash, torrent.url);
//       });
//     };
//     fetchData();
//   });

//   return <div>Magnets</div>;
// };
// const mapStateToProps = state => ({
//   magnets: state.magnets,
//   id: state.selectedMovieId
// });

// export default connect(mapStateToProps, {
//   fetchMagnets: fetchMagnets
// })(ShowMagnets);
