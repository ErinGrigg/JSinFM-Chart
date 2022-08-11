import c3 from 'c3';

window.loadChart = function (json) {

  const obj = JSON.parse(json);
  const data = obj.data;
  
  const chart = c3.generate({
    bindto: '#chart',
    size: {
      width: 600,
      height: 400
    },
    color: {
      pattern: ['#565d77', '#79C8B1']
    },
    axis: {
      x: {
        type: 'category'
      }
    },
    data: {
      colors: {
        data1: '#565d77',
        data2: '#79C8B1'
      },
      type: "bar",
  
      json: data,
      keys: {
        x: 'month',
        value: ['Peaches', 'Bananas', 'Pears']
      },
    },
  
  
  },
  );
};



