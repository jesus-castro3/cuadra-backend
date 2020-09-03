// TODO's
// - create user api api/users

const express = require('express');
const app = express();
const port = 3001;
const Users = require('./db/models/users');
const mapConfig = require('./constants/mapLayoutConfig');

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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
})

app.get('/users', (req, res) => {
  const query = getFirstQueryParam(req.query);
  
  return Users.findAll(query).then((d) => {
    return res.send(d)
  });
});

app.get('/layout', (req, res) => {
  const layout = mapConfig.map((z) => {
    const houses = z.lots.reduce((accum, lot)=> {
      let i = 0;
      do {
        let houseLetter = String.fromCharCode(97+i).toUpperCase();
        accum.push(lot.number + houseLetter);
        i += 1;
      } while (i < lot.repeat)
      return accum;
    }, []);
    return {
      zone: z.zone,
      houses
    }
  })
  return res.send(layout);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));