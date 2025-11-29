const express = require('express');

const app = express()

app.get("/", (req, res) => {
    res.send("your code is running well...")
})

module.exports = app;