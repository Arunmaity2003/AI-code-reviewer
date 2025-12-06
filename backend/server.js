require("dotenv").config();
const express = require("express");
const app = require("./src/app.js"); // your main app

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
