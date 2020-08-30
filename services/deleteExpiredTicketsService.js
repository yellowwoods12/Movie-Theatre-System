const {deleteExpiredTicketsDb} = require('../db/deleteExpiredTicketsDb');
const {checkTimeDifferenceService} = require('../services/checkTimeDifferenceService');



const deleteExpiredTicketsService = async (timing) => {
   try{

    //firstly update expiry status for tickets which have time difference between
    //current time and show time > 8
    checked = await checkTimeDifferenceService();
    console.log(checked);

    //delete all expired tickets so far
    deleteExpiry = await deleteExpiredTicketsDb();
    return deleteExpiry;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    deleteExpiredTicketsService
}



