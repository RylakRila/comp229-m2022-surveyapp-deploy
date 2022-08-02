import mongoose from "mongoose";
const Schema = mongoose.Schema;

import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new Schema({
    username: String,
    //DisplayName: String,
    EmailAddress: String,
    Created:{
        type: Date,
        default: Date.now()
    },
    Updated: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "users"
});

userSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", userSchema);

export default Model;