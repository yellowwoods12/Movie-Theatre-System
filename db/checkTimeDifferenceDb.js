var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const checkTimeDifferenceDb = async (currentTime) => {
 try{
  

     let checkExpirypromisify = promisify(connection.query).bind(connection);
    const checked = await checkExpirypromisify('UPDATE movie_tickets SET isExpired = 1 WHERE timestampdiff(HOUR,timings,?) > 8',[currentTime]);
   

    return {"message": "Successfully Updated Ticket Expiry status"};


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    checkTimeDifferenceDb
}