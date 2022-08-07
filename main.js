require('dotenv').config();
const { initWatcher } = require('./watcher');


const main = () => {
    initWatcher();
}


try {
    main();
    console.log("Watching webserver!")
} catch (err) {
    console.error(err)
}
