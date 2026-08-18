const express = require('express');
const app = express();
const fruits = require("./routes/fruits")

app.get('/', (req, res) => {
   res.send('Hello World!');
})

app.use(express.json())
app.use('/fruits', fruits);

module.exports = app