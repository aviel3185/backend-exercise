# Remote update concept
This project demonstrates a basic remote update logic,
which will allow us to release updates to an application without causing a significant downtime,
by utilizing a file-watcher daemon which runs in parallel to the served web application
another background instance. it validates that there were no errors to the background
instance, and if so, closes both processes and runs the new code.

## Docker-Compose Run example
### Requirements

- Docker
  - [docker-compose](https://docs.docker.com/compose/install/)

### Run Services
1. Run command ```docker-compose -f docker-compose.yml up -d``` to start up our web service as well as the file-watcher service
2. Navigate to [http://localhost:3000/](http://localhost:3000/) to view the example express application.
3. Edit the contents of the _webserver/_ folder to view the updated version
