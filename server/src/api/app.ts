import express = require("express");
import "reflect-metadata";
import * as path from 'path'
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import { CommonFunctions } from "./common/commonFunctions";
import { InversifyExpressServer } from "inversify-express-utils";
import { ApiContainer } from "./apiConfig";
import { ConstantValues } from "./constantValues"
//
import "./controllers/mailController"

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

let server = new InversifyExpressServer(ApiContainer, null, { rootPath: ConstantValues.api });
server.setConfig((app): void => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(allowCrossDomain);
  app.use(express.static('src/public'));
  //app.get('/', (req, res) => res.sendFile(path.resolve('src/public/index.html')))
  /*app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      res.sendFile(path.resolve(`src/public/${req.url}`))
    }
    res.sendFile(path.resolve('src/public/index.html'));
  })*/
});

function allowCrossDomain(req, res, next): void {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' === req.method) {
    res.send(200);
  } else {
    next();
  }
};

export default server.build();