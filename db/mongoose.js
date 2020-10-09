const mongoose = require("mongoose");
const keys = require("../config/dev");
const connection = "mongodb://127.0.0.1:27016y/find-my-movie";
mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// mongoose.connect(keys.mongoURI);
