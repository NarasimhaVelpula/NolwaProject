	/* Chartjs (#petleast) */
	var myCanvas = document.getElementById("petleast");
	myCanvas.height="335";

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 300);
	gradientStroke1.addColorStop(0, 'rgb(156, 49, 223,0.8)');


	var myChart = new Chart(myCanvas, {
		type: 'bar',
		data: {
			labels: ["Item Name", "Item Name", "Item Name", "Item Name", "Item Name"],
			datasets: [{
				label: 'Viewed count',
				data: [5, 14, 18, 15, 20, 15, 7, 0],
				backgroundColor: gradientStroke1,
				hoverBackgroundColor: gradientStroke1,
				hoverBorderWidth: 2,
				hoverBorderColor: 'gradientStroke1'
			}
		  ]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(225,225,225,0.9)',
				bodyFontColor: 'rgba(225,225,225,0.9)',
				backgroundColor: 'rgba(0,0,0,0.7)',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: true,
				labels: {
					display: true,
					usePointStyle: true,
					fontColor: '#070510'
				},
			},
			scales: {
				xAxes: [{
					 barPercentage: 0.5,
					ticks: {
						fontColor: "#070510",

					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(0,0,0,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: '#070510'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#070510",
					 },
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(0,0,0,0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: '#070510'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
	/* Chartjs (#petleast) closed */