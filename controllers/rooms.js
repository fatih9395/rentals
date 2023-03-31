const express = require('express');
const router = express.Router();

const fs = require('fs');

router.get('/', (req, res) => {
    const rooms = [
        {
            "Adress": "44 Madawaska Avenue, North York9",
        "RoomType": "Flex Room", "Price": "$900" 
    },

        {
            "Adress": "24 Athabaska Avenue, North York",
        "RoomType": "Master Room", "Price": "$1200" 
    },

        {
            "Adress": "96 Finch Avenue East, North York",
        "RoomType": "Deluxe Room", "Price": "$1100" 
    }
    ];
    res.render('rooms/index', {
        title: 'Rental Housing List',
        rooms: rooms
    });

    //getting data from json file 
   /*fs.readFile('./controllers/data/rooms.json', 'utf8', (err, rooms) =>{
        if(err) {
            console.log(err)
        }
        else{
            console.log(rooms);
            
        }
   })*/
        
    
})
  

module.exports = router;