const mongoose = require("mongoose");
const SavedMovies = mongoose.model("savedMovies");

//todo
/*
dont do dublicates
auth
*/
module.exports = (app) => {
  app.post("/api/user/movies/add", async (req, res) => {
    const movieId = req.body.id;
    console.log(movieId);

    const saveMovie = new SavedMovies({
      movieId: movieId,
    });
    await saveMovie.save();
    try {
      res.send();
    } catch (e) {
      res.status(401).send(e);
    }
  });

  app.get("/api/user/movies", async (req, res) => {
    try {
      const movies = await SavedMovies.find({});
      res.send(movies);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  app.delete("/api/user/movies/remove", async (req, res) => {
    // const id = req.body.id
    try {
      const savedMovie = await SavedMovies.findOneAndDelete({
        saveMovie: req.body.id,
      });
      if (!savedMovie) {
        return res.status(500).send(e);
      }
      res.send(savedMovie);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  });
};
