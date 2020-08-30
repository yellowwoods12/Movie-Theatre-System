const { deleteTicketService } = require('../services/deleteTicketService');

const deleteTicketController = async (req,res,next) => {

try{
    
    ticketId = req.body.ticketId;
    result = await deleteTicketService(ticketId);
    res.status(200).send(result);

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    deleteTicketController
}