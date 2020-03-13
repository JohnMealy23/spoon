const model = require('./model')
const logger = require('./logger')

model.forEach((item) => {
    logger(item)
})
