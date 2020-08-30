const {viewUserDb} = require('../db/viewUserDb');


const viewUserService = async (ticketId) => {
   try{

    userDetails = await viewUserDb(ticketId);
    return userDetails;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    viewUserService
}



