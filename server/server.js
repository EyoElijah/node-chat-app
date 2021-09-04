const express = require('express');

const path = require('path');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
let app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.send('this is the home page');
});

app.listen(port, console.log(`server started at port ${port}`));