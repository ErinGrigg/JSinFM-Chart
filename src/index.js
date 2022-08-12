import c3 from 'c3';

window.loadChart = function (json) {

  const obj = JSON.parse(json);
  const data = obj.data;
  const type = obj.type;
  const colorBanana = obj.colors.Bananas;
  const colorPeach = obj.colors.Peaches;
  const colorPear = obj.colors.Pears;
  const showLabels = obj.showLables;

  console.log(type);
  console.log(colorBanana);
  console.log(colorPeach);
  console.log(colorPear);
  console.log(showLabels);
  
  const chart = c3.generate({
    bindto: '#chart',

    axis: {
      x: {
        type: 'category',
        label: 'Months',
        position: 'outer-center'
      }
    },
    legend: {
      item: {
        onclick: function () {},
      },
    },
    data: {
      colors: {
        Peaches: colorBanana,
        Bananas: colorPeach,
        Pears: colorPear,
      },
      type: type,
      onclick: function () {},
      json: data,
      keys: {
        x: 'month',
        value: ['Peaches', 'Bananas', 'Pears']
      },
    },
    
  },
  );
};



