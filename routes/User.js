const express = require('express')
const app = express.Router()
var mySqlConnector = require("../database/mysqlConnector")
var mySqlConfig = require("../config/mysqlConfig.json")
const cors = require('cors')
const jwt = require('jsonwebtoken')
var url = require('url');
var responder = require("../lib/respond")
var mySqlWriteInstance;
var mySqlReadInstance;
var errorHandling = require("../lib/errorHandler")
var jwtDecode = require('jwt-decode');
var mySqlQueryHandler = require("../lib/mySqlQueryHandler")
const logger = require("../lib/logHandler").logger();
var userServlet = require('../servlet/userServlet')
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

app.post('/signUp',
    userServlet.signUp(
        responder,
        errorHandling,
        mySqlReadInstance,
        mySqlWriteInstance,
        mySqlQueryHandler,
        logger
    )
)

app.post('/login',
    userServlet.login(
        responder,
        errorHandling,
        mySqlReadInstance,
        mySqlWriteInstance,
        mySqlQueryHandler,
        logger
    )
)

module.exports = app