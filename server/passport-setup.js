import db from './models/sql.js'
import passport from 'passport';
import GoogleStrategy from 'passport-google-oidc';

import * as dotenv from 'dotenv'
dotenv.config()

const query = db.query;

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

// this sets up passport to use google
const passportSetup = () => {
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    // this is the callback AFTER THE SECOND invokation of authenticate. 
    // authenticate is run once when you use google login, then again when it is redirected back to the authorized page
    // Once authenticate is invoked again, it goes here.
    (issuer, profile, done) => {
        console.log(profile);
        const userID = profile.id;
        const name = profile.displayName;
        console.log(userID, name);
        //find the userID in sql, if it exists, then store sql user ID in session
        //WHY THE FUCK DOESN'T THIS WORK
        query(`select * from users;`)
        .then(query => {
            console.log(query.rows);
        })
        .then(() => next())
        .catch(err => console.log(err));
        console.log('qery done');
        //if it doesn't exist, create new sql user with the name and google ID.
        
    }));
}

// accessToken, refreshToken, profile, done

export default passportSetup