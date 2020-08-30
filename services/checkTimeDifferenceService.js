const {checkTimeDifferenceDb} = require('../db/checkTimeDifferenceDb');



const checkTimeDifferenceService = async () => {
   try{

    const current = new Date();
    var dd = String(current.getDate()).padStart(2, '0');
    var mm = String(current.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = current.getFullYear();
    currentTime = yyyy + '-' + mm + '-' +dd +" "+String(current).split(" ")[4];
    console.log(currentTime);
    updateExpiry = await checkTimeDifferenceDb(currentTime);

    return updateExpiry;

   } catch(e) {
       throw new Error ( e.message );
   }

}

module.exports = {
    checkTimeDifferenceService
}



