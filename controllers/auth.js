const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/register', (req, res) =>{
    let messages = req.session.messages;

    //clearing error msg
    req.session.messages = []

    res.render('auth/register', {
        title: 'Register',
        messages: messages
    });
});

router.post('/register', (req, res) => {
    User.register(new User({
        username: req.body.username
    }), req.body.password,
        (err, user) => {
            if(err){
                console.log(err);
                req.session.messages = err;
                //redirecting to register page
                res.redirect('/auth/register');
            }
            else{
                res.redirect('/rooms');
            }
        });
});

router.get('/login', (req, res) =>{
    let messages = req.session.messages;
    req.session.messages = []
    res.render('auth/login', {
        title: 'Login',
        messages:messages

    });
});

router.post('/login', passport.authenticate('local',{
    successRedirect: '/rooms',
    failureRedirect: '/auth/login',
    failureMessage: 'Invalid Login',
}));
module.exports = router;