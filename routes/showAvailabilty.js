var express = require('express')
var app = express.Router()
var mySqlConnector = require("../database/mysqlConnector")
var mySqlConfig = require("../config/mysqlConfig.json")
var cors = require('cors')
var showAvailabiltyServlet = require('../servlet/showAvailabiltyServlet')
var mySqlWriteInstance;
var mySqlReadInstance;
var responder = require("../lib/respond")
var errorHandling = require("../lib/errorHandler")
var mySqlQueryHandler = require("../lib/mySqlQueryHandler")
const logger = require("../lib/logHandler").logger();
app.use(cors())

process.env.SECRET_KEY = 'secret'

mySqlConnector = new mySqlConnector();
mySqlConnector.connect(
    mySqlConfig.MySqlWriteInstance,
    logger,
    function (err, res) {
        if (err !== null) {
            return err;
        }
        mySqlWriteInstance = res;
    }
);

mySqlConnector.connect(
    mySqlConfig.MySqlReadInstance,
    logger,
    function (err, res) {
        if (err !== null) {
            return err;
        }
        mySqlReadInstance = res;
    }
);

app.post('/moviesList',
    showAvailabiltyServlet.moviesList(
        responder,
        errorHandling,
        mySqlReadInstance,
        mySqlWriteInstance,
        mySqlQueryHandler,
        logger
    )
)

app.post('/showTimeList',
    showAvailabiltyServlet.showTimeList(
        responder,
        errorHandling,
        mySqlReadInstance,
        mySqlWriteInstance,
        mySqlQueryHandler,
        logger
    )
)

app.post('/seatAvailabilty',
    showAvailabiltyServlet.seatAvailabilty(
        responder,
        errorHandling,
        mySqlReadInstance,
        mySqlWriteInstance,
        mySqlQueryHandler,
        logger
    )
)

app.post('/bookMovieTicket',
    showAvailabiltyServlet.bookMovieTicket(
        responder,
        errorHandling,
        mySqlReadInstance,
        mySqlWriteInstance,
        mySqlQueryHandler,
        logger
    )
)

app.post('/userBookingSeat',
    showAvailabiltyServlet.userBookingSeat(
        responder,
        errorHandling,
        mySqlReadInstance,
        mySqlWriteInstance,
        mySqlQueryHandler,
        logger
    )
)

module.exports = app