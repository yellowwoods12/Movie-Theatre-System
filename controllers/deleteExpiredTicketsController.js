const { deleteExpiredTicketsService } = require('../services/deleteExpiredTicketsService');

const deleteExpiredTicketsController = async () => {

try{

    result = await deleteExpiredTicketsService();
    return result;

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    deleteExpiredTicketsController
}