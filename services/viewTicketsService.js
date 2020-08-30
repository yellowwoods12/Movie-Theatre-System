const {viewTicketsDb} = require('../db/viewTicketsDb');

const viewTicketsService = async (timings) => {
   try{

        ticketDetails = await viewTicketsDb(timings);
        console.log(ticketDetails);
        return ticketDetails;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    viewTicketsService
}