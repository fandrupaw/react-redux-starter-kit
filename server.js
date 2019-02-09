const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/dist'))); //  "public" off of current is root

app.listen(9000, function () {
    console.log('Listening on port 9000');
});
