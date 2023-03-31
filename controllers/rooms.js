const express = require('express');
const router = express.Router();

const fs = require('fs');

router.get('/', (req, res) => {
   
    //getting data from json file 
   fs.readFile('./controllers/data/rooms.json', 'utf8', (err, rooms) =>{
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
    });  
})
  

module.exports = router;