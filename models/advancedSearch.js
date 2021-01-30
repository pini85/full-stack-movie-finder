const mongoose = require("mongoose");
const { Schema } = mongoose;

const advancedSearchSchema = new Schema({
  advancedSearch: [],
  _user: { type: Schema.Types.ObjectId, ref: "User" },
});

mongoose.model("savedMovies", advancedSearchSchema);
