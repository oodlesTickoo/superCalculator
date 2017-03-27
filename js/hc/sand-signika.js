
Highcharts.createElement('link', {

 	href: 'https://fonts.googleapis.com/css?family=Dosis:400,600',
	rel: 'stylesheet',
	type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);


Highcharts.theme = {
	// colors: ["#006DB0", "#4997D0", "#0095B6", "#42C0FB"],
	// colors: ["#7d2f86","#7b5aa7", "#b478d2",  "#c4a6f7"],
	//colors: ["#7CB5EC","#434348","#90ed7d","#FFBC75"],
		// colors: ["#3f7b82","#8bc3b9", "#b4d4c0",  "#acd2bb"], blue1
		// colors: ["#3f7b82","#558381","#8bc3b9", "#b4d4c0"], blue2
		// colors: ["#225802","#728239","#88872b","#bbc46b"], green
	// colors: ["#8298a8","#a5d0d7", "#d0cbb6",  "#d7b0ac"], bright
	// colors: ["#7c8f78","#5f526a","#6f8266","#c0b6c1"],	 


		// colors: ["#FE0001", "#F5DE1D", "#0271BB", "#039349", "#F5DE1D", "#F99321", "#eeaaee",
		// "#93278B", "#DF5353", "#7798BF", "#aaeeee"],
		 /*colors: [{
            linearGradient: perShapeGradient,
            stops: [
            	[0, '#1B2631'],
                [1, '#3C546D']
                ]
            }, {
            linearGradient: perShapeGradient,
            stops: [
                [0, '#0D293F'],
                [1, '#1D6195']
                ]
            }, {
            linearGradient: perShapeGradient,
            stops: [
                [0, '#0E2421'],
                [1, '#337F75']
                ]},{
            linearGradient: perShapeGradient,
            stops: [
                [0, '#3F3F3F'],
                [1, '#6E6F6F']
                ]}, 
        ],*/
	chart: {
		backgroundColor: null,
		style: {
			// fontFamily: "Signika, serif"
			//fontFamily: "'Unica One', sans-serif"
			fontFamily: "Dosis, sans-serif"
		}
	},
	// title: {
	// 	style: {
	// 		color: 'black',
	// 		fontSize: '16px',
	// 		fontWeight: 'bold'
	// 	}
	// },
	title: {
		style: {
			color: '#000',
			textTransform: 'uppercase',
			fontWeight: 'bold',
			fontSize: '20px'
		}
	},
	subtitle: {
		style: {
			color: 'black'
		}
	},
	tooltip: {
		borderWidth: 0
	},
	legend: {
		itemStyle: {
			fontWeight: 'bold',
			fontSize: '15px'
		}
	},
	// xAxis: {
	// 	labels: {
	// 		style: {
	// 			color: '#6e6e70'
	// 		}
	// 	}
	// },
	// yAxis: {
	// 	labels: {
	// 		style: {
	// 			color: '#6e6e70'
	// 		}
	// 	}
	// },
	xAxis: {
		gridLineColor: '#707073',
		labels: {
			style: {
				color: '#000',
				fontWeight: 'bold',
				fontSize:'15px'
			}
		},
		lineColor: '#707073',
		minorGridLineColor: '#505053',
		tickColor: '#707073',
		title: {
			style: {
				color: '#A0A0A3',
                   fontSize:'15px'

			}
		}
	},
	yAxis: {
		gridLineColor: '#707073',
		labels: {
			style: {
				color: '#000',
				fontWeight: 'bold',
				fontSize:'15px'
			}
		},
		lineColor: '#707073',
		minorGridLineColor: '#505053',
		tickColor: '#707073',
		tickWidth: 1,
		title: {
			style: {
				color: '#000',
				fontWeight: 'bold',
                   fontSize:'15px'
			}
		}
	},
	plotOptions: {
		series: {
			shadow: true,
			fillOpacity: 0.5
		},
		candlestick: {
			lineColor: '#404048'
		},
		map: {
			shadow: false
		}
	},

	// Highstock specific
	navigator: {
		xAxis: {
			gridLineColor: '#D0D0D8'
		}
	},
	rangeSelector: {
		buttonTheme: {
			fill: 'white',
			stroke: '#C0C0C8',
			'stroke-width': 1,
			states: {
				select: {
					fill: '#D0D0D8'
				}
			}
		}
	},
	scrollbar: {
		trackBorderColor: '#C0C0C8'
	},

	// General
	background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

Highcharts.setOptions({lang: {
			thousandsSep: ','
		}});
