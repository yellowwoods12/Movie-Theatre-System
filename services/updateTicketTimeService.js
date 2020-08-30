const {updateTicketTimeDb} = require('../db/updateTicketTimeDb');
const {checkTimeDifferenceService} = require('../services/checkTimeDifferenceService');


const updateTicketTimeService = async (ticketId,newTime) => {
   try{

        //update ticket time
        res = await updateTicketTimeDb(ticketId,newTime);
        result = {"message": "Success : Ticket Time Updated"};
        
        //service to check if the time difference between any ticket time and current time exceeds 8 hours  => mark as expired
        checked = await checkTimeDifferenceService();
        console.log(checked);

        return result;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    updateTicketTimeService
}