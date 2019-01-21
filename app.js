// TODO's
// - create user api api/users

const express = require('express');
const app = express();
const port = 3000;
const Users = require('./db/models/users');
const mapConfig = require('./constants/mapConfig');

const getFirstQueryParam = (query) => {
  const res = {};
  const paramName = Object.keys(query).pop();

  if(paramName) {
    res.where = {
      [paramName]: query[paramName]
    }
  }
  return res;
}

app.get('/users', (req, res) => {
  const query = getFirstQueryParam(req.query);
  
  return Users.findAll(query).then((d) => {
    return res.send(d)
  });
});

app.get('/layout', (req, res) => {
  return res.send(mapConfig);
})

app.listen(port, () => console.log(`Example app listening on port ${port}`));