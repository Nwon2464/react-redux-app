const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientId,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);
