const express = require('express');
const router = express.Router();

var {authenticate} = require('../middleware/authenticate');


const openingTime = require('../controllers/openingTime');
 
router.post('/adding_timings',authenticate, openingTime.adding_timings);

router.get('/timingsList',authenticate, openingTime.timingsList);


module.exports = router;