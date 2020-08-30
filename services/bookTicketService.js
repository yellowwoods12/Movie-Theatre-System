const {bookTicketDb} = require('../db/bookTicketDb');
const {checkTicketCountDb} = require('../db/checkTicketCountDb');
const {getTicketIdDb} = require('../db/getTicketIdDb');
const {checkTimeDifferenceService} = require('../services/checkTimeDifferenceService');


const bookTicketService = async (userName,phoneNumber,movieName, timings) => {
   try{

        count = await checkTicketCountDb(timings);
         console.log(userName);
        if(count < 20){
             res = await bookTicketDb(userName,phoneNumber,movieName,timings);
             ticketId = await getTicketIdDb(phoneNumber,timings);
             console.log(ticketId);
             result = {"message": "Ticket Successfully Booked With Id "+ ticketId};
             
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