var gpio = require("rpi-gpio");
var logger = require("winston");

var send = function() {
    logger.info("activating signal ..");
};

module.exports =  {
    send: send
};
