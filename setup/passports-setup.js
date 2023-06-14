const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const emails = [process.env.ADMIN_EMAIL_GOOGLE];

passport.use(new GoogleStrategy({
    clientID:     "200618297224-4ail6a0ld3df2j8acb31io0g1pqsled1.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "localhost:3000/contactos",
    passReqToCallback   : true
  },
  function(accessToken, refreshToken, profile, done){
    const response = emails.includes(profile.emails[0].value);
    if(response){
        done(null, profile);
    } else {
        done(null, false);
    }
}))