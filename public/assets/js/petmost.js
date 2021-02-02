	/* Chartjs (#petsurvey) */
	var myCanvas = document.getElementById("petsurvey");
	myCanvas.height="335";

	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 380);
	gradientStroke1.addColorStop(0, 'rgb(237, 81, 81 ,0.8)');


	var myChart = new Chart(myCanvas, {
		type: 'bar',
		data: {
			labels: ["Item Name", "Item Name", "Item Name", "Item Name", "Item Name"],
			datasets: [{
				label: 'Viewed count',
				data: [35, 55, 61, 42, 59, 15, 7, 14],
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
	/* Chartjs (#petsurvey) closed */