const {bookTicketDb} = require('../db/bookTicketDb');
const {checkTicketCountDb} = require('../db/checkTicketCountDb');
const {checkTimeDifferenceService} = require('../services/checkTimeDifferenceService');


const bookTicketService = async (userName,phoneNumber,movieName, timings) => {
   try{

        count = await checkTicketCountDb(timings);
         console.log(userName);
        if(count < 20){
             res = await bookTicketDb(userName,phoneNumber,movieName,timings);
             result = {"message": "Success : Ticket Booked"};
             
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