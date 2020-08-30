const { deleteExpiredTicketsService } = require('../services/deleteExpiredTicketsService');

const deleteExpiredTicketsController = async () => {

try{
    //console.log(req);
    result = await deleteExpiredTicketsService();
    return result;

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    deleteExpiredTicketsController
}