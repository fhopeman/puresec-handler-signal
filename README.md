# puresec-handler-signal [![Build Status](https://travis-ci.org/fhopeman/puresec-handler-signal.svg?branch=master)](https://travis-ci.org/fhopeman/puresec-handler-signal)

This microservice is supposed to be an handler which gives a signal to one of the gpio ports of the
raspberry pi. The notifications are triggered by the master of the system.

## Preconditions
First of all you need a raspberry pi with installed [linux distribution](https://www.raspberrypi.org/downloads/).

## Usage
1. clone repository to your rasbperry pi and change directory to the created folder
2. run `./bin/setupServer.sh` to install npm, node and other dependencies
3. try to run `grunt`. If all tests passing, you are ready to start
4. now it's time to wire a signal receiver. I'm using a standard LED or a light which is turned on if
   a high value is given to the gpio pin.
5. run the following command to start the microservice:
   `node src/app.js`
   If you haven't configured your system to set gpio pins without root rights, you have to start
   the application with `sudo node src/app.js`.

   Following options are configurable via env properties:
| Property    | Default                 |
|-------------|-------------------------|
| MASTER_URL  | http://localhost:3000   |
| NAME        | Signal Handler          |
| DESCRIPTION |                         |
| PORT        | 3004                    |
| PIN         | 7                       |

   The start command with properties:
   `MASTER_URL="http://url/to/master:port" [some other properties] node src/app.js`
