'use strict';
module.exports.schema = {
    "type": "object",
    "additionalProperties": "true",
    "properties": {
        "userName": {
            "type": "string",
            "optional": true,
        },
        "email": {
            "type": "string",
            "optional": true,
        },
        "mobileNumber": {
            "type": "string",
            "optional": false,
        },
        "password": {
            "type": "string",
            "optional": false,
        }
    }
};