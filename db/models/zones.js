const Sequelize = require('sequelize');
const sequelize = require('../index');
const mapLayoutConfig = require('../../constants/mapLayoutConfig');

const Zones = connection.define('zones', {
  zone: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  house: {
    type: Sequelize.STRING,
    unique: true
  }
});

sequelize.sync({
  force: true,
  loggin: true
}).then(() => {
  const zones = mapLayoutConfig.map((z) => {
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
  Zones.bulkCreate(zones)
})

