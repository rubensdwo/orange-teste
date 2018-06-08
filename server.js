'use strict'

const path = require('path');
const http = require('http');
const express = require(path.resolve('config/express'));

const app = express.app();
const port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
  console.log('Funcionando na porta: ' + port);
});
