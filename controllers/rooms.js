const express = require('express');
const router = express.Router();

//const fs = require('fs');

//using the room model for CRUD
const Room= require('../models/room')
const City = require('../models/city');


router.get('/', (req, res) => {
   
    //getting data from json file 
   /*fs.readFile('./controllers/data/rooms.json', 'utf8', (err, rooms) =>{
        if (err) {
            console.log(err)
        }
        else{
            console.log(rooms);
            res.render('rooms/index', {
            title: 'Rental Housing List',
            rooms: JSON.parse(rooms)
            });
        }
    });*/

    //Getting the data from mongodb
    Room.find((err, rooms)=>{
        if (err) {
            console.log(err)
        }
        else{
            console.log(rooms);
            res.render('rooms/index', {
            title: 'Rental Housing List',
            rooms: rooms
            });
        }
    });
});


//Get method to display form to add a room
router.get('/create',(req,res)=>{
    City.find((err, cities) =>{
        if(err) {
            console.log(err);
        }
        else{
            res.render('rooms/create',{
                cities: cities
            });
        }
    })
    

});
//post/create to submit the form to mongodb

router.post('/create',(req,res)=>{
    Room.create(req.body, (err, newDocument)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/rooms');
        }
    })

});
  

module.exports = router;