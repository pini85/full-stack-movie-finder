const mongoose = require("mongoose");
const connection = "mongodb://127.0.0.1:27016y/find-my-movie";
mongoose.connect(connection, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
