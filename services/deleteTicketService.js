const {deleteTicketDb} = require('../db/deleteTicketDb');


const deleteTicketService = async (ticketId) => {
   try{

    deleteTicket = await deleteTicketDb(ticketId);
    return deleteTicket;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    deleteTicketService
}



