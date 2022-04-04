const events = require('events')
//the toBecached flag is set in responder to prevent setting TTL again for already cached request
exports.respond = function(data, res, logger, toBecached = true) {
    logger.info('Response being sent : ', JSON.stringify(data));
    if (data) {
        res.status(200).json({
            status: "success",
            requestId: null,
            result: data
        });
        let listner = function listner1() {
		   	return data;
		   }
    }
};
