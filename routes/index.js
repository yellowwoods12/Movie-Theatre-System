const express = require('express');
var app = express();

const router = express.Router()
const bookTicketController  = require('../controllers/bookTicketController');
const updateTicketTimeController = require('../controllers/updateTicketTimeController');
const viewTicketsController  = require('../controllers/viewTicketsController');


router.post('/', function(req, res) {
    res.json({ message: 'server started' });
});
app.use('/api', router);

router.post('/bookTicket',bookTicketController.bookTicketController);
router.post('/updateTicketTime',updateTicketTimeController.updateTicketTimeController);
router.post('/viewTickets',viewTicketsController.viewTicketsController);

module.exports = router
