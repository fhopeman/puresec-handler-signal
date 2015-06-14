# puresec-handler-signal [![Build Status](https://travis-ci.org/fhopeman/puresec-handler-signal.svg?branch=master)](https://travis-ci.org/fhopeman/puresec-handler-signal)

This microservice is supposed to be an handler which gives a signal to one of the gpio ports of the
raspberry pi. The notifications are triggered by the master of the system.

## Preconditions
First of all you need a raspberry pi with installed [linux distribution](https://www.raspberrypi.org/downloads/).

## Usage
Firstly, clone the repository to your rasbperry pi and change the directory to the created folder. To setup the microservice, you can use the `./bin/setupServer.sh` script to install npm, node and other dependencies which are mandatory. If you run `grunt` successfully and all tests passing, you are ready to start the wiring. 

I'm using a standard LED which is turned on if a high value is given to the gpio pin (default pin is 7). A high value will be send to the pin, if the handler receives a message from the master to handle an alarm. The easiest wiring is the following:
pin 7 -> LED -> resistor (e.g. 470 Ohm) -> 3.3V

Run the following command to start the microservice:

`node src/app.js`

If you haven't configured your system to set gpio pins without root rights, you have to start the application with 

`sudo node src/app.js`.

Following options are configurable via env properties:

|Property       | Description                    | Default         |
|---------------|--------------------------------|-------------|
|MASTER_URL     | Url of the master server       | http://localhost:3000   |
|NAME           | Name of the handler            | Signal Handler          |
|DESCRIPTION    | Description of the handler     |                       |
|PORT           | Port on which the handler runs | 3004                    |
|PIN            | Pin for LED/sirene/..          | 7                       |
|TURN_OFF_DELAY | Turn off delay                 | 60   |

The start command with properties:

`MASTER_URL="http://url/to/master:port" [some other properties] node src/app.js`
