const { port } = require('./config');
const open = require('./open');
const express = require('express');
const app = express();

app.use(express.static('src'));
app.use(express.static('server'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    open(`http://localhost:${port}`)
});
