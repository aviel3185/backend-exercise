const { watch: chokidarWatch } = require('chokidar');
const { config } = require('./config');
const cp = require('child_process');


let childProcess;

/**
 * init watcher for the directory of the webserver (which was set in the .env file) and assign the event handler
 */
const initWatcher = () => {

    chokidarWatch(config.webserverMainFile)
        .on('all', updateOrRun)
        .on('error', () => {
            throw new Error('An error has occured for the watcher!');
        });


    process.on('beforeExit', () => {
        childProcess.kill(0);
    });
}


const updateOrRun = () => {
    if (!childProcess) {
        childProcess = cp.fork(config.webserverMainFile, { env: { PORT: 3000 } });
    } else {
        const newChildProcess = cp.fork(config.webserverMainFile, { env: { PORT: '3001' } }, { stdio: 'inherit' })
            .on('spawn', () => {
                newChildProcess.kill();
            })
            .on('exit', (err, signal) => {
                // Means Express application has crashed due to some error
                if (signal !== "SIGTERM") {
                    console.log('Could not update, Corrupted express application!')
                } else {
                    childProcess.kill()
                    childProcess = cp.fork(config.webserverMainFile, { env: { PORT: 3000 } }, { stdio: 'inherit' });
                    console.log('Updated webserver!')
                }
            });

    }
}


module.exports = {
    initWatcher
}