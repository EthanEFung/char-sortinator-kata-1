const { load, config } = require('dotenv');
load();
config();

const express = require('express');
const path = require('path');
const { urlencoded, json } = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;
const router = require('./routes/index');

app
  .use(cors())
  .use(urlencoded({ extended: true }))
  .use(json())
  .use(express.static(path.resolve('client')))
  .use(router);

app.listen(port, err => {
  if (err) throw `could not connect to port ${port}`;
  console.log(`listening on port ${port}`);
});  