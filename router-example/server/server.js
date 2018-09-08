const express = require("express");
const app = express();
const GitHubStrategy = require("passport-github").Strategy;
const passport = require("passport");
const path = require("path");
app.use(passport.initialize());
app.use(passport.session());
app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(express.static("build"));
app.listen(4000, () => console.log("Example app listening on port 3000"));

passport.use(
  new GitHubStrategy(
    {
      clientID: "8e277edc02110f0b8ffd",
      clientSecret: "8f6f1e5430ccf71094846725faf5d071f8ab2d08",
      callbackURL: "http://127.0.0.1:4000/auth/github/callback/"
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log(profile);
      return cb(null, profile);
    }
  )
);
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});
