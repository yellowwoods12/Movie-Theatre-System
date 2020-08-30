const { updateTicketTimeService } = require('../services/updateTicketTimeService');

const updateTicketTimeController = async (req, res, next) => {

try{
    console.log(req);
    console.log(req.body);
    const ticketId= req.body.ticketId;
    const newTime = req.body.newTime;
    result = await updateTicketTimeService(ticketId,newTime);
    console.log(result);
    res.status(200).send(result);

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    updateTicketTimeController
}