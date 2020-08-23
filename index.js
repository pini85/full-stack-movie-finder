const express = require("express");
const app = express();
const passport = require("passport");
// app.get("/api/test", (req, res) => {
//   res.send("Hello World");
// });
app.use(passport.initialize());
require("./routes/authRoutes")(app);
const PORT = 5000;
app.listen(PORT);
