const express = require('express');
const router = express.Router();
const City = require('../models/city.js');

//Showing the new city with get method
router.get('/create', (req,res)=>{
    res.render('cities/create');
});

//Submitting the city in mongodb with post method
router.post('/create', (req,res) =>{
    City.create(req.body, (err,newDocument)=>{
    if(err) {
        console.log(err);
    }
    else{
        res.redirect('/');
    }
});

});

module.exports = router;