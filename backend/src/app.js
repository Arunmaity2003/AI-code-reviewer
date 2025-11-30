const express = require('express');
const aiRoutes = require('./routes/ai.route.js')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("your code is running well...")
})

app.use('/ai',aiRoutes)

module.exports = app;