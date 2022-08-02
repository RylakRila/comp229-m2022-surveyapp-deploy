import express from "express";
import passport from "passport";

import User from '../schema/user-schema.js';

import { GenerateToken } from "../Utils/index.js";


export function ProcessRegisterPage(request, response, next) {
    // instantiate a new user object
    let newUser = new User({
        username: request.body.name,
        EmailAddress: request.body.email,

        
    });
    console.log(request.body)
    User.register(newUser, request.body.password, (err) => {
        if(err) {
            if(err.name == "UserExistsError") {
                console.error('ERROR: User Already Exists!');
            } else {
                console.error(err.name); // other error
            }
            return response.json({success: false, msg: 'ERROR: Registration Failed!  '})
        }
        
        //everything fine
        
        return response.json({success: true, msg: 'User Registered Successfully!'});
    });
}


export function ProcessLoginPage(req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        //server errors?
        if (err) {
            console.error(err);
            res.end(err);
        }
        
        if (!user) {
            return res.json({success: false, msg: 'ERROR: Authentication error'});
        }
        
        // no problem - we have right username and password
        req.logIn(user, (err) => {
            // db errors?
            if (err) {
                console.error(err);
                res.end(err);
            }
            
            const authToken = GenerateToken(user);
            
            return res.json({success: true, msg: 'User Logged In Successfully', user: {
                id: user._id,
                DisplayName: user.DisplayName,
                username: user.username,
                EmailAddress: user.EmailAddress
            }, token: authToken});
        });
        
        return;
    })(req, res, next);
}




export function ProcessLogoutPage(req, res, next) {
    req.logOut((err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log("User logged out")
    });
    
    res.json({success: true, msg: 'User Logged out Successfully!'});
}