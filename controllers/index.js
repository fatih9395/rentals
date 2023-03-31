const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, ) => {
  res.render('index', { title: 'Rentals' });
});

/* GET /about page. */
router.get('/about', (req, res,) => {
  let date = new Date();
  res.render('about',{
    date: date
  });
});  

module.exports = router;
