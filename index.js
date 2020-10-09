const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/dev");
app.use(bodyParser.json());
require("./models/User");
require("./models/SavedMovies");
require("./services/passport");
mongoose.connect(keys.mongoURI);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
require("./routes/savedMovieRoutes")(app);

const PORT = 5000;
app.listen(PORT);
