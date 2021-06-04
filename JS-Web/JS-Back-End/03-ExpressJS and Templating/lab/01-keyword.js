const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send(`Welcome to our app.`)
})
app.get('/search/:keyword', (req, res) => {
    const keyword = req.params.keyword;
    res.send(`Search page ${keyword}`);
})

app.listen(port)