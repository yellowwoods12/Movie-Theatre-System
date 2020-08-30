const {viewTicketsDb} = require('../db/viewTicketsDb');

const viewTicketsService = async (timings) => {
   try{

        //extract ticket details for given time
        ticketDetails = await viewTicketsDb(timings);
        return ticketDetails;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    viewTicketsService
}