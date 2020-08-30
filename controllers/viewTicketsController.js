const { viewTicketsService } = require('../services/viewTicketsService');

const viewTicketsController = async (req, res, next) => {

try{
    console.log(req.body);
    const timings= req.body.timings;
    result = await viewTicketsService(timings);
    console.log(result);
    res.status(200).send(result);

} catch (e) {
    throw new Error (e);
}

}

module.exports = {
    viewTicketsController
}