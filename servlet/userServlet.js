var util = require('util');
const errorMessage = require('../lib/errorResponse/errorMessage');
const statusCode = require('../lib/errorResponse/errorStatusCode');
var validator = require("../lib/requestValidator");
const bcrypt = require('bcrypt')
var saltRounds = 10;
var signUpSchema = require('../schema/signUpSchema')
var loginSchema = require('../schema/loginSchema')
const jwt = require('jsonwebtoken')
var fs = require('fs')
var private = fs.readFileSync('/home/aditya/Desktop/cawStudios/config/private.key', 'utf8');

function signUp(responder, errorHandling, mySqlReadInstance,
    mySqlWriteInstance, mySqlQueryHandler, logger) {
    return async function (req, res, next) {
        try {
            logger.info("inside signUp servlet function")
            var data = req.body;
            let query
            let params

            const isRequestValid = validator.jsonValidate(
                data, signUpSchema.schema, logger
            );
            if (!isRequestValid.valid) {
                logger.debug(isRequestValid);
                errorHandling.errorHandler(
                    statusCode.BAD_REQUEST,
                    isRequestValid.errors.map((validation, i) =>
                        (i + 1) + ". "
                        + validation.property + ": "
                        + validation.message
                    )
                        .join("; "), res, logger,
                    errorMessage.BAD_REQUEST.CODE
                );
                return;
            }

            query = `SELECT * FROM user_details 
                WHERE mobile_number = ? OR email = ?`
            params = [
                data.mobileNumber,
                data.email
            ]
            let mysqlUtil = util.promisify(mySqlQueryHandler);
            mysqlUtil(mySqlWriteInstance, query, params, logger)
                .then(result => {
                    logger.info("user details result -->", result)
                    if (result.length > 0) {
                        logger.info("user already exist")
                        responder.respond("user already exist", res, logger);
                    } else {
                        bcrypt.hash(data.password, saltRounds, function (err, hash) {
                            if (err) {
                                logger.error("error in generating bcrypt password",
                                    err)
                                return err
                            } else {
                                logger.info("successfully pawword bcrypted")
                                data.password = hash
                                query = `INSERT INTO user_details(
                                user_name, email, mobile_number, 
                                password) VALUES(?,?,?,?)`
                                params = [
                                    data.userName,
                                    data.email,
                                    data.mobileNumber,
                                    data.password
                                ]
                                let result = mysqlUtil(
                                    mySqlWriteInstance, query,
                                    params, logger)
                                logger.info("successfully data store in DB", result)
                                responder.respond("Data succesfully store in DB",
                                    res, logger);
                            }
                        });
                    }
                })
        }
        catch (error) {
            logger.error(error.stack)
            errorHandling.errorHandler(statusCode.INTERNAL_SERVER_ERROR,
                errorMessage.INTERNAL_SERVER_ERROR.MESSAGE,
                res,
                logger,
                errorMessage.INTERNAL_SERVER_ERROR.CODE);
        }
    }
}

function login(responder, errorHandling, mySqlReadInstance,
    mySqlWriteInstance, mySqlQueryHandler, logger) {
    return async function (req, res, next) {
        try {
            logger.info("inside login servlet function")
            var data = req.body;
            let query
            let params

            const isRequestValid = validator.jsonValidate(
                data, loginSchema.schema, logger
            );
            if (!isRequestValid.valid) {
                logger.debug(isRequestValid);
                errorHandling.errorHandler(
                    statusCode.BAD_REQUEST,
                    isRequestValid.errors.map((validation, i) =>
                        (i + 1) + ". "
                        + validation.property + ": "
                        + validation.message
                    )
                        .join("; "), res, logger,
                    errorMessage.BAD_REQUEST.CODE
                );
                return;
            }
            if (data.mobileNumber && data.password) {
                query = `SELECT * FROM user_details 
                    WHERE mobile_number = ?`
                params = [
                    data.mobileNumber
                ]
            } 
            else if(data.email && data.password) {
                query = `SELECT * FROM user_details 
                    WHERE email = ?`
                params = [
                    data.email
                ]
            } else{
                responder.respond("mobileNumber or emailId is missing", res,
                            logger);
            } 

            let mysqlUtil = util.promisify(mySqlQueryHandler);
            mysqlUtil(mySqlWriteInstance, query, params, logger)
                .then(result => {
                    logger.info("user details result -->", result)
                    if (result.length == 0) {
                        logger.info("user not exist")
                        responder.respond("user not exist please signup first", res,
                            logger);
                    } else {
                        bcrypt.compare(data.password, result[0].password,
                            function (err, hash) {
                                if (err) {
                                    logger.error("error in comparing bcrypt password",
                                        err)
                                    return err
                                } else {
                                    logger.info("successfully password compared")
                                    let payload = {
                                        "mobileNumber": result[0].mobile_number,
                                        "email": result[0].email,
                                        "isLogin": true,
                                        "userId": result[0].id
                                    }
                                    var accessToken = 
                                        module.exports.generateAccessToken(payload);
                                    logger.info("accessToken --> ",accessToken)
                                    responder.respond(accessToken,
                                        res, logger);
                                }
                            });
                    }
                })
        }
        catch (error) {
            logger.error(error.stack)
            errorHandling.errorHandler(statusCode.INTERNAL_SERVER_ERROR,
                errorMessage.INTERNAL_SERVER_ERROR.MESSAGE,
                res,
                logger,
                errorMessage.INTERNAL_SERVER_ERROR.CODE);
        }
    }
}

function generateAccessToken(payload) {
    var header = {
        "tokenType": "access-token"
    }
    var signOptions = {
        expiresIn: "1h",
        algorithm: "RS256",
        header: header
    };
    return jwt.sign(payload, private, signOptions);
}

module.exports.signUp = signUp;
module.exports.login = login;
module.exports.generateAccessToken = generateAccessToken;