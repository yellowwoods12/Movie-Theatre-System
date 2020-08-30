const {viewUserDb} = require('../db/viewUserDb');


const viewUserService = async (ticketId) => {
   try{

    //extract user details for the given time
    userDetails = await viewUserDb(ticketId);
    return userDetails;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    viewUserService
}



