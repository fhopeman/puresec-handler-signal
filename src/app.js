var express = require("express");
var logger = require("winston");
var puresecMicroservice = require("puresec-microservice-js");
var signal = require("./signal");

// settings
logger.level = "info";

// read application properties
var urlMaster = process.env.MASTER_URL || process.argv[2] || "http://localhost:3000";
var name = process.env.NAME || process.argv[3] || "Signal Handler";
var description = process.env.DESCRIPTION || process.argv[4] || "";
var pin = process.env.PIN || process.argv[5] || 11;
var port = process.env.PORT || process.argv[6] || 3004;
var turnOffDelay = process.env.TURN_OFF_DELAY || process.argv[7] || 60;

// services
var app = express();
var master = puresecMicroservice.master(urlMaster);
var utils = puresecMicroservice.utils();
var webApp = puresecMicroservice.webApp();

// register endpoints
webApp.registerHealthCheckEndpoint(app);
webApp.registerNotificationEndpoint(app, function(req, res) {
    logger.info("\nnotification received ..");
    signal.send(true);
    setTimeout(function() {
        signal.send(false);
    }, turnOffDelay * 1000);
});

app.listen(port, function () {
    // register
    master.register({
        name: name,
        description: description,
        type: "handler",
        address: utils.currentAddress(port),
        onSuccess: function(jsonBody) {
            logger.info("registration successful", jsonBody);
            signal.init(pin);
        },
        onError: function(error) {
            logger.error("registration failed, exiting now", error);
            process.exit(1);
        }
    });
});
