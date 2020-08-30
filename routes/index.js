const express = require('express');
var app = express();

const router = express.Router()
const bookTicketController  = require('../controllers/bookTicketController');
const updateTicketTimeController = require('../controllers/updateTicketTimeController');
const viewTicketsController  = require('../controllers/viewTicketsController');
const deleteTicketController  = require('../controllers/deleteTicketController');
const viewUserController  = require('../controllers/viewUserController');


router.post('/', function(req, res) {
    res.json({ message: 'server started' });
});

app.use('/api', router);

//routes for all the end-points
router.post('/bookTicket',bookTicketController.bookTicketController);
router.post('/updateTicketTime',updateTicketTimeController.updateTicketTimeController);
router.post('/viewTickets',viewTicketsController.viewTicketsController);
router.post('/deleteTicket',deleteTicketController.deleteTicketController);
router.post('/viewUser',viewUserController.viewUserController);

module.exports = router
