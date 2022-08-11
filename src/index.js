import c3 from 'c3';

const chart = c3.generate({
  bindto: '#chart',
  size: {
    width: 600,
    height: 400
  },
  color: {
    pattern: ['#565d77', '#79C8B1']
  },
  data: {

    colors: {
      data1: '#565d77',
      data2: '#79C8B1'
    },
    type: "bar",
    axis: {
      x: {
        type: 'category'
      }
    },
    json: [
      {
        "month": "Jan",
        "Peaches": 327,
        "Bananas": 437,
        "Pears": 111
      },
      {
        "month": "Feb",
        "Peaches": 555,
        "Bananas": 454,
        "Pears": 222
      },
      {
        "month": "Mar",
        "Peaches": 242,
        "Bananas": 864,
        "Pears": 343
      },
      {
        "month": "Apr",
        "Peaches": 222,
        "Bananas": 454,
        "Pears": 434
      }
    ],
    keys: {
      x: 'month',
      value: ['Peaches', 'Bananas', 'Pears']
    },
  },


},

);