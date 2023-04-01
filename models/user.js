const mongoose = require('mongoose');
// this model used for our authentication
const plm = require('passport-local-mongoose');
//library we used for authentication
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    oauthProvider: String,
    oauthId: String
});

userSchema.plugin(plm);
userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', userSchema);