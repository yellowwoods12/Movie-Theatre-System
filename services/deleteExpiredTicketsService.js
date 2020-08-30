const {deleteExpiredTicketsDb} = require('../db/deleteExpiredTicketsDb');



const deleteExpiredTicketsService = async (timing) => {
   try{

    deleteExpiry = await deleteExpiredTicketsDb();
    return deleteExpiry;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    deleteExpiredTicketsService
}



