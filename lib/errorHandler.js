var errorCodeMessage = require("../config/errorHandlerConfig.json");

exports.errorHandler = function (errorCode, err, res, logger, customErrorCode) {
    logger.error('Error response sent : ', err);
    let defaultErrorCode = 500;

    if (!errorCode || errorCode === 500) {
        errorCode = defaultErrorCode;
    }

    var errorMessage;
    if (customErrorCode) {
        errorMessage = err;
    } else {
        errorMessage = errorCode.toString() in errorCodeMessage ?
            errorCodeMessage[errorCode.toString()] : "Something Went Wrong";
        customErrorCode = "E" + errorCode
    }
    if (err) {
        res.status(errorCode).json({
            status: "error",
            requestId: null,
            exception: {
                error: {
                    description: "",
                    extras: "",
                    code: customErrorCode + "",
                    message: errorMessage
                }
            }
        });
    }
};