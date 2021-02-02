new Morris.Donut({
    element: 'morrisBar8',
    data: [
      {value: 35, label: 'CATS'},
      {value: 30, label: 'DOGS'},
      {value: 45, label: 'BIRDS'},
      {value: 29, label: 'FISH'},
      {value: 5, label: 'REPTILES'},
      {value: 2, label: 'INSECTS'},
      {value: 20, label: 'SMALL ANIMALS'},
      {value: 7, label: 'FARM ANIMALS'},
    ],
    colors: [
  '#008ecc', '#f01b87', '#0acf4a', '#c41722', '#22337d', '#ab57e3', '#ec7071', '#f18f13'

],
    formatter: function (x) { return x }
  }).on('click', function(i, row){
    console.log(i, row);
});
