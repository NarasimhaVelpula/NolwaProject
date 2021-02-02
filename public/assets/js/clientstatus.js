$(function(e){
    'use strict'
  
   /* chartjs (#sales-status) */
   var ctx = $('#client-status');
      ctx.height(285);
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
              type: 'line',
              datasets: [{
                  label: "Customers",
                  data: [678, 723, 543, 834, 295, 935, 382, 756, 486, 386, 678, 780],
                  backgroundColor: 'transparent',
                  borderColor: '#008ecc',
                  borderWidth: 3,
                  pointStyle: 'circle',
                  pointRadius: 5,
                  pointBorderColor: 'transparent',
                  pointBackgroundColor: '#008ecc',
              }, {
                  label: "Sellers",
                  data: [250, 320, 260, 410, 690, 760, 380, 425, 630, 724, 586, 960],
                  backgroundColor: 'transparent',
                  borderColor: '#9c31df',
                  borderWidth: 3,
                  pointStyle: 'circle',
                  pointRadius: 5,
                  pointBorderColor: 'transparent',
                  pointBackgroundColor: '#9c31df',
              }, {
                  label: "Companies",
                  data: [10, 50, 70, 90, 55, 100, 120, 150, 190, 200, 350, 400],
                  backgroundColor: 'transparent',
                  borderColor: '#22337d',
                  borderWidth: 3,
                  pointStyle: 'circle',
                  pointRadius: 5,
                  pointBorderColor: 'transparent',
                  pointBackgroundColor: '#22337d',
              }]
          },
          options: {
              responsive: true,
              maintainAspectRatio: false,
              tooltips: {
                  mode: 'index',
                  titleFontSize: 12,
                  titleFontColor: '#000',
                  bodyFontColor: '#000',
                  backgroundColor: '#fff',
                  cornerRadius: 3,
                  intersect: false,
              },
              legend: {
                  display: true,
                  labels: {
                      usePointStyle: false,
                  },
              },
              scales: {
                  xAxes: [{
                      ticks: {
                          fontColor: "#070510",
                       },
                      display: true,
                      gridLines: {
                          display: true,
                          color:'rgba(96, 94, 126, 0.1)',
                          drawBorder: false
                      },
                      scaleLabel: {
                          display: false,
                          labelString: 'Month',
                          fontColor: 'transparent'
                      }
                  }],
                  yAxes: [{
                      ticks: {
                          fontColor: "#070510",
                       },
                      display: true,
                      gridLines: {
                          display: true,
                          color:'rgba(96, 94, 126, 0.1)',
                          drawBorder: false
                      },
                      scaleLabel: {
                          display: false,
                          labelString: 'sales',
                          fontColor: 'transparent'
                      }
                  }]
              },
              title: {
                  display: false,
                  text: 'Normal Legend'
              }
          }
      });
      /* chartjs (#sales-status) closed */
  
  });
  