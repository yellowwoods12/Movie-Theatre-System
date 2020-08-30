const { viewUserService } = require('../services/viewUserService');

const viewUserController = async (req,res,next) => {

try{
    
    ticketId = req.body.ticketId;
    userDetails = await viewUserService(ticketId);
    res.status(200).send(userDetails);

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    viewUserController
}