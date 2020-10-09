const mongoose = require("mongoose");
const { Schema } = mongoose;

const savedMoviesSchema = new Schema({
  movieId: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model("savedMovies", savedMoviesSchema);

// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userSchema = new Schema({
//   googleId: String,
// });

// mongoose.model("users", userSchema);
