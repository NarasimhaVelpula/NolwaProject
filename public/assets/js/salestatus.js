$(function(e){
    'use strict'
  
   /* chartjs (#sales-status) */
   var ctx = $('#sale-status');
      ctx.height(285);
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
              type: 'line',
              datasets: [{
                  label: "Pets",
                  data: [37, 60, 54, 43, 70, 50, 40, 65, 80, 120, 90, 150],
                  backgroundColor: 'transparent',
                  borderColor: '#008ecc',
                  borderWidth: 3,
                  pointStyle: 'circle',
                  pointRadius: 5,
                  pointBorderColor: 'transparent',
                  pointBackgroundColor: '#008ecc',
              }, {
                  label: "Accessories",
                  data: [25, 32, 90, 71, 69, 130, 190, 160, 210, 150, 300, 360],
                  backgroundColor: 'transparent',
                  borderColor: '#9c31df',
                  borderWidth: 3,
                  pointStyle: 'circle',
                  pointRadius: 5,
                  pointBorderColor: 'transparent',
                  pointBackgroundColor: '#9c31df',
              }, {
                  label: "Services",
                  data: [10, 7, 15, 25, 55, 70, 50, 90, 190, 170, 210, 190],
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
  