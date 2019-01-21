/** SET limit to the number of houses to rep per zone */
const MAX_NUM = 6;
const MED_NUM = 4;
const MIN_NUM = 1;

const mapConfig = [
  {
    zone: 1,
    lots: [
      {
        number: 1403,
        repeat: 2
      },
      {
        number: 1407,
        repeat: MAX_NUM,
      },
      {
        number: 1413,
        repeat: MAX_NUM
      },
      {
        number: 1419,
        repeat: MAX_NUM
      },
    ]
  },
  {
    zone: 2,
    lots: [
      {
        number: 1408,
        repeat: MAX_NUM
      },
      {
        number: 1414,
        repeat: MAX_NUM
      },
      {
        number: 1420,
        repeat: MAX_NUM
      }
    ]
  },
  {
    zone: 3,
    lots: [
      {
        number: 1423,
        repeat: MED_NUM
      },
      {
        number: 1429,
        repeat: MAX_NUM
      },
      {
        number: 1433,
        repeat: MAX_NUM
      },
      {
        number: 1441,
        repeat: MAX_NUM
      },
      {
        number: 1445,
        repeat: MED_NUM
      },
      {
        number: 1448,
        repeat: MIN_NUM
      }
    ]
  },
  {
    zone: 4,
    lots: [
      {
        number: 1430,
        repeat: 5
      },
      {
        number: 1436,
        repeat: MAX_NUM
      },
      {
        number: 1442,
        repeat: MAX_NUM
      },
      {
        number: 1446,
        repeat: MED_NUM
      },
      {
        number: 1450,
        repeat: MIN_NUM
      }
    ]
  }
]
module.exports = mapConfig;