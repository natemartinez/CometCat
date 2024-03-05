const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(express.json());
app.use(cors());





app.listen(3000, () => {
  console.log('Server started on port 3000');
});
