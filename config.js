
WEBSERVER_MAIN_FILE = "WEBSERVER_MAIN_FILE"

const config = {
    webserverMainFile: process.env[WEBSERVER_MAIN_FILE]
};

config.webServerDirName = config.webserverMainFile.substring(0, config.webserverMainFile.indexOf('/'))

module.exports = {
    config
}