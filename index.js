const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
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

if (process.env.NODE_ENV === "production") {
  //if the handlers above won't resolve the request it will go to the next route handler below

  //Express will serve up production assests. Like our main.js or main.css
  // app.use(express.static("client/build"));
  // //if this handler cannot resolve it then go to the next one.

  // const path = require("path");
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
  const root = require("path").join(__dirname, "client", "build");
  app.use(express.static(root));
  app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
