const logger = (...rest) => {
    console.log(JSON.stringify(rest))
}

module.exports = logger
