# Open water data collection app prototype

Use [nodemon's](https://github.com/remy/nodemon) legacy mode to monitor file changes in your container. The app will restart, if you change any **.js**, **.json** or **.hjs** file.

## Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

## Setup

Run `docker-compose build`. It will

* install [nodemon](https://github.com/remy/nodemon) globally in your container
* install all dependencies from the package.json locally
* expose port 3000 to the host
* instruct the container to execute `npm start` on start up.

## Start

Run `docker-compose up` to create and start the container. The app should then be running on your docker daemon on port 3030 (On OS X you can use `boot2docker ip` to find out the IP address).

## CouchDB

For remote couchdb server see [here](http://docs.couchdb.org/en/2.0.0/config/http.html)

## Nano

Nano is the official wrapper library to make calls to couchdb from nodejs
https://www.npmjs.com/package/nano

## CURL Commands

Login using the default credentials
```curl http://admin:password@localhost:5984```
Create a new db
```curl -X PUT http://youradminuser:youradminpassword@localhost:5984/testdb```

## Futon

Futon is the official control panel for CouchDB. It can be accessed by appending `_utils` to the url.

http://localhost:5984/_utils

