'use strict';
module.exports.schema = {
    "type": "object",
    "additionalProperties": "true",
    "properties": {
        "cityName": {
            "type": "string",
            "optional": true,
        },
        "movieName": {
            "type": "string",
            "optional": false,
        },
        "showDate": {
            "type": "string",
            "optional": false,
        },
        "cinemasName": {
            "type": "string",
            "optional": false,
        },
        "showTime": {
            "type": "string",
            "optional": false,
        },
        "bookingSeat": {
            "type": "object",
            "optional": false,
        }
    }
};