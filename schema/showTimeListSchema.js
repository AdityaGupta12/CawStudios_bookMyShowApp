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
        }
    }
};