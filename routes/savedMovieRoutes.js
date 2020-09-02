const mongoose = require("mongoose");
const SavedMovies = mongoose.model("savedMovies");

module.exports = (app) => {
  app.post("/api/save/movie", async (req, res) => {
    const MovieId = req.body.id;
    const savedMovie = new SavedMovies({
      savedMovies: MovieId,
    });
    try {
      await savedMovie.save();
      res.send("ok!");
    } catch (err) {
      res.send(err);
    }
  });
};
