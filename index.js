const os = require("os")
const fs = require("fs")

class Logger {
    static #date = new Date(Date.now()).toISOString().split('T')[0];
    static #FILE_PATH = `./${this.#date}.log`

    static #writeLog(txt) {
        fs.appendFile(this.#FILE_PATH, txt + os.EOL, err => {
            if (err) console.error(err);
        });
    }

    static info(txt) {
        const time = new Date(Date.now());
        this.#writeLog(`${time.toLocaleString()} [INFO]: ` + txt);
        console.info(txt);
    }

    static warn(txt) {
        const time = new Date(Date.now());
        this.#writeLog(`${time.toLocaleString()} [Warning]: ` + txt);
        console.warn(txt);
    }

    static error(txt) {
        const time = new Date(Date.now());
        this.#writeLog(`${time.toLocaleString()} [ERROR]: ` + txt);
        console.error(txt);
    }
}


Logger.info("Hey there! This is an info message!")
Logger.warn("Oops! something happened!")
Logger.error("Damn, something happened!")