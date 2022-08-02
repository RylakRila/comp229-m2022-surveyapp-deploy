import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';
import passportJWT from 'passport-jwt';

// define JWT Alias
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let localStrategy = passport.localStrategy;

import User from '../schema/user-schema.js';
import { dbSecret } from './db.js';

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// setup JWT Options
let jwtOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: dbSecret
};

// setup JWT Strategy
let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
    .then(user => {
        return done(null, user);
    })
    .catch(err => {
        return done(err, false);
    });
});

passport.use(strategy);

export default { passport, session, flash };