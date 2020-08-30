var mysql = require('mysql');
const { promisify } = require('util');
var connection = require('../connection');

const viewUserDb = async (ticketId) => {
 try{
  

    let userDetailspromisify = promisify(connection.query).bind(connection);
    const userDetails = await userDetailspromisify('Select user_name,phone_number from movie_tickets where ticketID = ?',[ticketId]);

    userDetailstr = JSON.stringify(userDetails);
    userDetailsjson = JSON.parse(userDetailstr);

    console.log(userDetailsjson);
    if(userDetailsjson.length == 0)
    {
        return {"message" : "No ticket exists with the given Id "+ticketId};
    }
    //console.log(ticketDetailsjson);
    return userDetailsjson;


 } catch (e) {
     throw new Error( e.message);
 }
} 

module.exports = {
    viewUserDb
}