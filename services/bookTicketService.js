const {bookTicketDb} = require('../db/bookTicketDb');


const bookTicketService = async (userName,phoneNumber,movieName, timings) => {
   try{

       result = await bookTicketDb(userName,phoneNumber,movieName,timings);
       

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    bookTicketService
}