var util = require('util');
const errorMessage = require('../lib/errorResponse/errorMessage');
const statusCode = require('../lib/errorResponse/errorStatusCode');
var validator = require("../lib/requestValidator");
var moviesListSchema = require('../schema/moviesListSchema')
var showTimeListSchema = require('../schema/showTimeListSchema')
var seatAvailabiltySchema = require('../schema/seatAvailabiltySchema')
var bookMovieTicketSchema = require('../schema/bookMovieTicketSchema')
const jwt = require('jsonwebtoken')

function moviesList(responder, errorHandling, mySqlReadInstance,
    mySqlWriteInstance, mySqlQueryHandler, logger) {
    return async function (req, res, next) {
        try {
            logger.info("inside moviesList servlet function")
            var data = req.body;
            let query

            const isRequestValid = validator.jsonValidate(
                data, moviesListSchema.schema, logger
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
            if (data.cityName) {
                query = `SELECT ml.movies_name As movieName FROM movies_cities_list mcl
                INNER JOIN movies_list ml ON ml.id = mcl.movies_id 
                WHERE cities_id = 
                    (SELECT id from cities_list WHERE city_name = ?)`;
            } else {
                query = `SELECT movies_name As movieName FROM movies_list`;
            }
            let params = [data.cityName];
            let mysqlUtil = util.promisify(mySqlQueryHandler);
            let result = await mysqlUtil(mySqlWriteInstance, query, params, logger)
            responder.respond(result, res, logger);
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

function showTimeList(responder, errorHandling, mySqlReadInstance,
    mySqlWriteInstance, mySqlQueryHandler, logger) {
    return async function (req, res, next) {
        try {
            logger.info("inside showTimeList servlet function")
            var data = req.body;
            let query
            let params
            let finalResult = {}
            const isRequestValid = validator.jsonValidate(
                data, showTimeListSchema.schema, logger
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
            if (data.cityName) {
                query = `SELECT cl.cinemas_name AS cinemasName, 
                        DATE_FORMAT(sl.show_date, '%Y-%m-%d') AS showDate, 
                        DATE_FORMAT(sl.show_time, '%h:%i %p') AS showTime 
                    FROM 
                        showtime_list sl
                    INNER JOIN 
                        movies_list ml ON ml.id = sl.movies_id
                    INNER JOIN 
                        cinemas_list cl ON cl.id = sl.cinemas_id
                    WHERE cl.cities_id = 
                        (SELECT id from cities_list WHERE city_name = ?) 
                    AND ml.movies_name = ? and sl.show_date = ?
                    AND DATE_FORMAT(sl.show_time, '%H:%i:%s') > CURRENT_TIME`;
                params = [data.cityName, data.movieName, data.showDate];
            } else {
                query = `SELECT cl.cinemas_name AS cinemasName, 
                        DATE_FORMAT(sl.show_date, '%Y-%m-%d') AS showDate, 
                        DATE_FORMAT(sl.show_time, '%h:%i %p') AS showTime 
                    FROM 
                        showtime_list sl
                    INNER JOIN 
                        movies_list ml ON ml.id = sl.movies_id
                    INNER JOIN 
                        cinemas_list cl ON cl.id = sl.cinemas_id
                    WHERE ml.movies_name = ? and sl.show_date = ?
                        and DATE_FORMAT(sl.show_time, '%H:%i:%s') > CURRENT_TIME`;
                params = [data.movieName, data.showDate];
            }
            let mysqlUtil = util.promisify(mySqlQueryHandler);
            let result = await mysqlUtil(mySqlWriteInstance, query, params, logger)
            for (let i in result) {
                if (finalResult.hasOwnProperty(result[i].cinemasName)) {
                    finalResult[result[i].cinemasName].push({
                        showDate: result[i].showDate,
                        showTime: result[i].showTime
                    })
                } else {
                    finalResult[result[i].cinemasName] = [];
                    finalResult[result[i].cinemasName].push({
                        showDate: result[i].showDate,
                        showTime: result[i].showTime
                    })
                }
            }
            responder.respond(finalResult, res, logger);
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

function seatAvailabilty(responder, errorHandling, mySqlReadInstance,
    mySqlWriteInstance, mySqlQueryHandler, logger) {
    return async function (req, res, next) {
        try {
            logger.info("inside seatAvailabilty servlet function")
            var data = req.body;
            let query
            let params
            const isRequestValid = validator.jsonValidate(
                data, seatAvailabiltySchema.schema, logger
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
            if (data.cityName) {
                query = `SELECT
                            cl.cinemas_name AS cinemasName,
                            DATE_FORMAT(sl.show_date, '%Y-%m-%d') AS showDate,
                            DATE_FORMAT(sl.show_time, '%h:%i %p') AS showTime,
                            sl.seat_avaibiltity AS seatAvaibile
                        FROM
                            showtime_list sl
                            INNER JOIN movies_list ml ON ml.id = sl.movies_id
                            INNER JOIN cinemas_list cl ON cl.id = sl.cinemas_id
                        WHERE
                            cl.cities_id = (
                            SELECT
                                id
                            from
                                cities_list
                            WHERE
                                city_name = ?
                            )
                        AND ml.movies_name = ?
                        and sl.show_date = ?
                        and cl.cinemas_name = ?
                        and DATE_FORMAT(sl.show_time, '%h:%i %p') = ?`;
                params = [
                    data.cityName,
                    data.movieName,
                    data.showDate,
                    data.cinemasName,
                    data.showTime
                ];
            } else {
                query = `SELECT
                            cl.cinemas_name AS cinemasName,
                            DATE_FORMAT(sl.show_date, '%Y-%m-%d') AS showDate,
                            DATE_FORMAT(sl.show_time, '%h:%i %p') AS showTime,
                            sl.seat_avaibiltity AS seatAvaibile
                        FROM
                            showtime_list sl
                            INNER JOIN movies_list ml ON ml.id = sl.movies_id
                            INNER JOIN cinemas_list cl ON cl.id = sl.cinemas_id
                        WHERE ml.movies_name = ?
                            and sl.show_date = ?
                            and cl.cinemas_name = ?
                            and DATE_FORMAT(sl.show_time, '%h:%i %p') = ?`;
                params = [
                    data.movieName,
                    data.showDate,
                    data.cinemasName,
                    data.showTime
                ];
            }
            let mysqlUtil = util.promisify(mySqlQueryHandler);
            let result = await mysqlUtil(mySqlWriteInstance, query, params, logger)
            responder.respond(result, res, logger);
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

function bookMovieTicket(responder, errorHandling, mySqlReadInstance,
    mySqlWriteInstance, mySqlQueryHandler, logger) {
    return async function (req, res, next) {
        try {
            logger.info("inside bookMovieTicket servlet function")
            const auth = req.get('Authorization');
            const payload = module.exports.decode(auth).payload;
            let isLogin = payload.isLogin
            let userId = payload.userId
            let showTimeId
            if (!isLogin) {
                errorHandling.errorHandler(statusCode.UNAUTHORIZED,
                    errorMessage.UNAUTHORIZED_ACCESS.MESSAGE, res, logger,
                    errorMessage.UNAUTHORIZED_ACCESS.CODE
                );
                return;
            }
            var data = req.body;
            let query
            let params
            const isRequestValid = validator.jsonValidate(
                data, bookMovieTicketSchema.schema, logger
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
            if (data.cityName) {
                query = `SELECT
                            sl.id AS showTimeId,
                            cl.cinemas_name AS cinemasName,
                            DATE_FORMAT(sl.show_date, '%Y-%m-%d') AS showDate,
                            DATE_FORMAT(sl.show_time, '%h:%i %p') AS showTime,
                            sl.seat_avaibiltity AS seatAvaibile
                        FROM
                            showtime_list sl
                            INNER JOIN movies_list ml ON ml.id = sl.movies_id
                            INNER JOIN cinemas_list cl ON cl.id = sl.cinemas_id
                        WHERE
                            cl.cities_id = (
                            SELECT
                                id
                            from
                                cities_list
                            WHERE
                                city_name = ?
                            )
                        AND ml.movies_name = ?
                        and sl.show_date = ?
                        and cl.cinemas_name = ?
                        and DATE_FORMAT(sl.show_time, '%h:%i %p') = ?`;
                params = [
                    data.cityName,
                    data.movieName,
                    data.showDate,
                    data.cinemasName,
                    data.showTime
                ];
            } else {
                query = `SELECT
                            sl.id AS showTimeId,
                            cl.cinemas_name AS cinemasName,
                            DATE_FORMAT(sl.show_date, '%Y-%m-%d') AS showDate,
                            DATE_FORMAT(sl.show_time, '%h:%i %p') AS showTime,
                            sl.seat_avaibiltity AS seatAvaibile
                        FROM
                            showtime_list sl
                            INNER JOIN movies_list ml ON ml.id = sl.movies_id
                            INNER JOIN cinemas_list cl ON cl.id = sl.cinemas_id
                        WHERE ml.movies_name = ?
                            and sl.show_date = ?
                            and cl.cinemas_name = ?
                            and DATE_FORMAT(sl.show_time, '%h:%i %p') = ?`;
                params = [
                    data.movieName,
                    data.showDate,
                    data.cinemasName,
                    data.showTime
                ];
            }
            let mysqlUtil = util.promisify(mySqlQueryHandler);
            mysqlUtil(mySqlWriteInstance, query, params, logger)
                .then(async result => {
                    if (result.length == 0) {
                        responder.respond([], res, logger);
                    } else {
                        showTimeId = result[0].showTimeId
                        let seatAvaibile = result[0].seatAvaibile
                        seatAvaibile = seatAvaibile.replace('[', '')
                        seatAvaibile = seatAvaibile.replace(']', '')
                        seatAvaibile = seatAvaibile.split(",")
                        seatAvaibile = seatAvaibile.filter(function (item) {
                            return data.bookingSeat.indexOf(item) == -1
                        })
                        seatAvaibile = seatAvaibile.toString().replace('"', '')
                        seatAvaibile = '[' + seatAvaibile + ']'
                        logger.info("seatAvailable --->", seatAvaibile)
                        if (data.cityName) {
                            query = `UPDATE showtime_list sl
                            INNER JOIN movies_list ml ON ml.id = sl.movies_id
                            INNER JOIN cinemas_list cl ON cl.id = sl.cinemas_id 
                            SET sl.seat_avaibiltity = ? 
                            WHERE
                                cl.cities_id = (
                                SELECT
                                    id
                                from
                                    cities_list
                                WHERE
                                    city_name = ?
                                )
                            AND ml.movies_name = ?
                            and sl.show_date = ?
                            and cl.cinemas_name = ?
                            and DATE_FORMAT(sl.show_time, '%h:%i %p') = ?`
                            params = [
                                seatAvaibile,
                                data.cityName,
                                data.movieName,
                                data.showDate,
                                data.cinemasName,
                                data.showTime
                            ];
                        } else {
                            query = `UPDATE showtime_list sl
                            INNER JOIN movies_list ml ON ml.id = sl.movies_id
                            INNER JOIN cinemas_list cl ON cl.id = sl.cinemas_id 
                            SET sl.seat_avaibiltity = ? 
                            WHERE ml.movies_name = ?
                            and sl.show_date = ?
                            and cl.cinemas_name = ?
                            and DATE_FORMAT(sl.show_time, '%h:%i %p') = ?`
                            params = [
                                seatAvaibile,
                                data.movieName,
                                data.showDate,
                                data.cinemasName,
                                data.showTime
                            ];
                        }
                        mysqlUtil(mySqlWriteInstance, query, params, logger)
                            .then(async setBooked => {
                                query = `INSERT INTO user_booking_seat_list(user_id,
                            showtime_id, seat_booked) VALUES(?,?,?)`
                                params = [
                                    userId,
                                    showTimeId,
                                    data.bookingSeat
                                ]
                                let finalResult = await mysqlUtil(mySqlWriteInstance,
                                    query, params, logger)
                                responder.respond("succesfully set booked", res, logger);
                            })
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

function decode(token) {
    return jwt.decode(token, { complete: true });
}

function userBookingSeat(responder, errorHandling, mySqlReadInstance,
    mySqlWriteInstance, mySqlQueryHandler, logger) {
    return async function (req, res, next) {
        try {
            logger.info("inside userBookingSeat servlet function")
            var data = req.body;
            let query
            let params
            const auth = req.get('Authorization');
            const payload = module.exports.decode(auth).payload;
            let isLogin = payload.isLogin
            let userId = payload.userId
            if (!isLogin) {
                errorHandling.errorHandler(statusCode.UNAUTHORIZED,
                    errorMessage.UNAUTHORIZED_ACCESS.MESSAGE, res, logger,
                    errorMessage.UNAUTHORIZED_ACCESS.CODE
                );
                return;
            }
            
            query = `select
                        cl.cinemas_name AS cinemasName,
                        ml.movies_name AS movieName,
                        DATE_FORMAT(sl.show_date, '%Y-%m-%d') AS showDate,
                        DATE_FORMAT(sl.show_time, '%h:%i %p') AS showTime,
                        ubsl.seat_booked AS seatBooked
                    from
                        user_booking_seat_list ubsl
                        INNER JOIN showtime_list sl ON sl.id = ubsl.showtime_id
                        INNER JOIN cinemas_list cl ON cl.id = sl.cinemas_id
                        INNER JOIN movies_list ml ON ml.id = sl.movies_id
                    WHERE
                        user_id = ?`
            params = [userId]
            let mysqlUtil = util.promisify(mySqlQueryHandler);
            let result = await mysqlUtil(mySqlWriteInstance, query, params, logger)
            for(i in result){
                result[i].seatBooked = JSON.parse(result[i].seatBooked)
            }
            responder.respond(result, res, logger);
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

module.exports.moviesList = moviesList;
module.exports.showTimeList = showTimeList;
module.exports.seatAvailabilty = seatAvailabilty;
module.exports.bookMovieTicket = bookMovieTicket;
module.exports.decode = decode;
module.exports.userBookingSeat =userBookingSeat;