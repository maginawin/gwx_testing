var chart = null;
$.getJSON('https://raw.githubusercontent.com/maginawin/gwx_testing/main/data.json', function (data) {
	chart = Highcharts.chart('container', {
		chart: {
			zoomType: 'x'
		},
		title: {
			text: '走势图'
		},
		subtitle: {
			text: document.ontouchstart === undefined ?
			'鼠标拖动可以进行缩放' : '手势操作进行缩放'
		},
		// xAxis: {
		// 	type: 'datetime',
		// 	dateTimeLabelFormats: {
		// 		millisecond: '%H:%M:%S.%L',
		// 		second: '%H:%M:%S',
		// 		minute: '%H:%M',
		// 		hour: '%H:%M',
		// 		day: '%m-%d',
		// 		week: '%m-%d',
		// 		month: '%Y-%m',
		// 		year: '%Y'
		// 	}
		// },
		tooltip: {
			dateTimeLabelFormats: {
				millisecond: '%H:%M:%S.%L',
				second: '%H:%M:%S',
				minute: '%H:%M',
				hour: '%H:%M',
				day: '%Y-%m-%d',
				week: '%m-%d',
				month: '%Y-%m',
				year: '%Y'
			}
		},
		yAxis: {
			title: {
				text: ''
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			area: {
				fillColor: {
					linearGradient: {
						x1: 0,
						y1: 0,
						x2: 0,
						y2: 1
					},
					stops: [
						[0, new Highcharts.getOptions().colors[0]],
						[1, new Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
					]
				},
				marker: {
					radius: 2
				},
				lineWidth: 1,
				states: {
					hover: {
						lineWidth: 1
					}
				},
				threshold: null
			}
		},
		series: [{
			type: 'area',
			name: '值',
			data: data
		}]
	});
});