'use strict'

const path = require('path');
const express = require('express');
const session = require('express-session');
const ejs = require('ejs');

const home = require(path.resolve('modules/repository/home/controllers/home'));
const op = home.op();

exports.app = () => {
  const app = express();

  app.use('/static', express.static('static'));
  app.use(session({ secret: 'rubens', cookie: { maxAge: 600000 }}))

  app.set('views', './modules/views');
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    res.render('home', op);
  });

  return app;
}
