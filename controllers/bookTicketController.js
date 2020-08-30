const { bookTicketService } = require('../services/bookTicketService');

const bookTicketController = async (req, res, next) => {

try{
    //console.log(req);
    console.log(req.body);
    const userName = req.body.userName;
    const phoneNumber = req.body.phoneNumber;
    const movieName = req.body.movieName;
    const timings = req.body.timings;
    result = await bookTicketService(userName,phoneNumber,movieName,timings);
    console.log(result);
    res.status(200).send(result);

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    bookTicketController
}