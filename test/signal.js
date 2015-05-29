var testee = require('../src/signal');

var gpio = require("rpi-gpio");
var assert = require("assert");
var sinon = require("sinon");

describe("signal handler", function() {
    var PIN_VALUE_HIGH = true;
    var PIN_VALUE_LOW = false;

    var gpioWriteStub;
    var gpioSetupStub;

    afterEach(function () {
        if (gpioWriteStub) {
            gpioWriteStub.restore();
        }
        if (gpioSetupStub) {
            gpioSetupStub.restore();
        }
    });

    it("should be initialized", function() {
        // given
        gpioSetupStub = sinon.stub(gpio, "setup");

        // when
        testee.init(7);

        assert.notEqual(testee, undefined);
        assert(gpioSetupStub.withArgs(7, "out").calledOnce);
    });

    it("should send true signal", function() {
        // given
        gpioSetupStub = sinon.stub(gpio, "setup");
        gpioWriteStub = sinon.stub(gpio, "write");

        // when
        testee.init(7);
        testee.send(PIN_VALUE_HIGH);

        // then
        assert(gpioWriteStub.withArgs(7, PIN_VALUE_HIGH, sinon.match.func).calledOnce);
    });

    it("should send false signal", function() {
        // given
        gpioSetupStub = sinon.stub(gpio, "setup");
        gpioWriteStub = sinon.stub(gpio, "write");

        // when
        testee.init(7);
        testee.send(PIN_VALUE_LOW);

        // then
        assert(gpioWriteStub.withArgs(7, PIN_VALUE_LOW, sinon.match.func).calledOnce);
    });
});
