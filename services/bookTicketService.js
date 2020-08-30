const {bookTicketDb} = require('../db/bookTicketDb');
const {checkTicketCountDb} = require('../db/checkTicketCountDb');
const {getTicketIdDb} = require('../db/getTicketIdDb');
const {checkTimeDifferenceService} = require('../services/checkTimeDifferenceService');


const bookTicketService = async (userName,phoneNumber,movieName, timings) => {
   try{

        //number of tickets booked at the given time
        count = await checkTicketCountDb(timings);

        if(count < 20){
             res = await bookTicketDb(userName,phoneNumber,movieName,timings);
             ticketId = await getTicketIdDb(phoneNumber,timings);
             console.log(ticketId);
             result = {"message": "Ticket Successfully Booked With Id "+ ticketId};
             
             //Service to check the time difference between the current time and tickets' time present in DB.
             // If difference > 8 => mark isExpired = true in DB.
             checked = await checkTimeDifferenceService();
             console.log(checked);
        }
        else{
            result = {"message":"Error:Slot full"};
        }

        return result;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    bookTicketService
}