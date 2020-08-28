const express = require('express');
var app = express();

const router = express.Router()
const bookTicketController  = require('../controllers/bookTicketController');



router.post('/', function(req, res) {
    res.json({ message: 'server started' });
});
app.use('/api', router);

router.post('/bookTicket',bookTicketController.bookTicketController);

module.exports = router
