'use strict';
module.exports.schema = {
    "type": "object",
    "additionalProperties": "true",
    "properties": {
        "email": {
            "type": "string",
            "optional": true,
        },
        "mobileNumber": {
            "type": "string",
            "optional": true,
        },
        "password": {
            "type": "string",
            "optional": false,
        }
    }
};