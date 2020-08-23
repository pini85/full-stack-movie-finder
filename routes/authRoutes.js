const passport = require("passport");

module.exports = (app) => {
  console.log("hwlloooooo");
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  console.log("hi");
  app.get("auth/google/callback", passport.authenticate("google"));
};
