import express from 'express';
const app = express();
import cors from 'cors';
const ipBlacklistRoutes = require('./routes/ipBlacklist')
var { expressjwt: jwt } = require("express-jwt");
var mcache = require('memory-cache');

app.use(express.json())
app.use(cors());

var cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}
//cache api request for 60 seconds
app.use('/api/',cache(60),ipBlacklistRoutes);
// app.use('/api/',ipBlacklistRoutes);

app.listen(3000)
