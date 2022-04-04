var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

var users = require('./routes/User')
var showAvailabilty = require('./routes/showAvailabilty')

app.use('/users', users)
app.use('/showAvailabilty', showAvailabilty)


app.listen(port, function () {
    console.log('Server is running on port: ' + port)
})