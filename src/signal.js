var gpio = require("rpi-gpio");
var logger = require("winston");

var _pin;

var send = function(signal) {
    logger.info("send signal", signal, "to pin", _pin, "..");
    gpio.write(_pin, signal, function(err) {
        if (err) {
            logger.error("error while setting signal", err);
        } else {
            logger.info("signal sent");
        }
    });
};

var init = function(pin) {
    _pin = pin;

    logger.debug("setup output pin", pin);
    gpio.setup(pin, gpio.DIR_OUT);
};

module.exports =  {
    init: init,
    send: send
};
