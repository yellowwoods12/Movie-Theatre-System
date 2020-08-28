const { bookTicketService } = require('../services/bookTicketService');

const bookTicketController = async (req, res, next) => {
 
const userName = req.body.userName;
const phoneNumber = req.body.phoneNumber;
const movieName = req.body.movieName;
const timings = req.body.timings;

console.log(email);
try{
    console.log("45");
    result = await bookTicketService(userName,phoneNumber,movieName,timings);
    console.log("12");
    console.log(result);
    res.status(200).send(result);

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    bookTicketController
}