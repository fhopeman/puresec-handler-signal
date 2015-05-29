var testee = require('../src/signal');

var gpio = require("rpi-gpio");
var assert = require("assert");
var sinon = require("sinon");

describe("signal handler", function() {

    afterEach(function () {
        //if (gpioReadStub) {
        //    gpioReadStub.restore();
        //}
        //if (gpioSetupStub) {
        //    gpioSetupStub.restore();
        //}
    });

    it("should be initialized", function() {
        assert.notEqual(testee, undefined);
    });

    it("should send signal", function() {
        //// given
        //gpioReadStub = sinon.stub(gpio, "read");
        //gpioSetupStub = sinon.stub(gpio, "setup");
        //
        //// whenŝ
        //testee.start({}, 7, 9);
        //this.clock.tick(3001);
        //
        //// then
        //assert(gpioReadStub.withArgs(9, sinon.match.func).calledOnce);
        //assert(gpioSetupStub.withArgs(9, "in").calledOnce);
    });
});
