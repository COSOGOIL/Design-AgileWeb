$(function() {
	$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/aapl-c.json&callback=?', function(data) {
		// Create the chart
		$('#container20').highcharts('StockChart', {
			rangeSelector: {
				selected: 1,
				inputEnabled: false
			},
			navigator: {
				enabled: false
			},
			scrollbar: {
				enabled: false
			},
			series: [{
				name: '产量',
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}],
			credits: {
				enabled: false
			}
		});
	});
});
$(function() {
	$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/aapl-c.json&callback=?', function(data) {
		// Create the chart
		$('#container21').highcharts('StockChart', {
			rangeSelector: {
				selected: 1,
				inputEnabled: false
			},
			navigator: {
				enabled: false
			},
			scrollbar: {
				enabled: false
			},
			series: [{
				name: '运行时间',
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}],
			credits: {
				enabled: false
			}
		});
	});
});
$(function() {
	$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/aapl-c.json&callback=?', function(data) {
		// Create the chart
		$('#container23').highcharts('StockChart', {
			rangeSelector: {
				selected: 1,
				inputEnabled: false
			},
			navigator: {
				enabled: false
			},
			scrollbar: {
				enabled: false
			},
			series: [{
				name: '能耗',
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}],
			credits: {
				enabled: false
			}
		});
	});
});
$(function() {
	$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/aapl-c.json&callback=?', function(data) {
		// Create the chart
		$('#container22').highcharts('StockChart', {
			rangeSelector: {
				selected: 1,
				inputEnabled: false
			},
			navigator: {
				enabled: false
			},
			scrollbar: {
				enabled: false
			},
			series: [{
				name: '运行时率',
				data: data,
				tooltip: {
					valueDecimals: 2
				}
			}],
			credits: {
				enabled: false
			}
		});
	});
});
$(function() {
	$('#container').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			align: 'center',
			verticalAlign: 'middle',
			x: -25,
			text: '<span style="font-size:17px; color:#76838f;font-family:微软雅黑;">功图诊断</span>'
		},
		tooltip: {
			headerFormat: '{series.name}<br>',
			pointFormat: '{point.name}: <b>{point.y}口</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.y}口',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				},
				startAngle: -90,
				endAngle: 90
			}
		},
		series: [{
			type: 'pie',
			name: '功图诊断',
			innerSize: '70%',
			data: [
				['正常', 36],
				['充满不足', 26],
				{
					name: '游动凡尔漏失',
					y: 12,
					sliced: true,
					selected: true
				},
				['供液不足', 8],
				['出砂', 6],
				['采集异常', 7]
			]
		}],
		credits: {
			enabled: false
		}
	});

	$('#container1').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			align: 'center',
			verticalAlign: 'middle',
			x: -25,
			text: '<span style="font-size:17px; color:#76838f;font-family:微软雅黑;">产量波动</span>'
		},
		tooltip: {
			headerFormat: '{series.name}<br>',
			pointFormat: '{point.name}: <b>{point.y}口</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.y}口',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				},
				startAngle: -90,
				endAngle: 90
			}
		},
		series: [{
			type: 'pie',
			innerSize: '70%',
			name: '产量波动',
			data: [
				['5.01~10t', 4],
				['4.01~5t', 6],
				{
					name: '3.01~4t',
					y: 12,
					sliced: true,
					selected: true
				},
				['2.01~3t', 8],
				['1.01~2t', 20],
				['0~1t', 45]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container2').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			align: 'center',
			verticalAlign: 'middle',
			x: -25,
			text: '<span style="font-size:17px; color:#76838f;font-family:微软雅黑;">时率监测</span>'
		},
		tooltip: {
			headerFormat: '{series.name}<br>',
			pointFormat: '{point.name}: <b>{point.y}口</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.y}口',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				},
				startAngle: -90,
				endAngle: 90
			}
		},
		series: [{
			type: 'pie',
			innerSize: '70%',
			name: '时率监测',
			data: [
				['运行', 95],
				['未及时停抽', 6],
				{
					name: '长停井',
					y: 15,
					sliced: true,
					selected: true
				},
				['间抽停井', 15],
				['未及时启抽', 2],
				['计划外停井', 5]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container3').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			align: 'center',
			verticalAlign: 'middle',
			x: -25,
			text: '<span style="font-size:17px; color:#76838f;font-family:微软雅黑;">能耗分析</span>'
		},
		tooltip: {
			headerFormat: '{series.name}<br>',
			pointFormat: '{point.name}: <b>{point.y}口</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.y}口',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				},
				startAngle: -90,
				endAngle: 90

			}
		},
		series: [{
			type: 'pie',
			innerSize: '70%',
			name: '吨液百米耗电量',
			data: [
				['15KW·h~', 5],
				['10.1~15KW·h', 11],
				{
					name: '5.1~10KW·h',
					y: 13,
					sliced: true,
					selected: true
				},
				['4.1~5KW·h', 15],
				['2.1~4KW·h', 51],
				['0~2KW·h', 0]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container4').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			align: 'center',
			verticalAlign: 'middle',
			x: -25,
			text: '<span style="font-size:17px; color:#76838f;font-family:微软雅黑;">平衡分析</span>'
		},
		tooltip: {
			headerFormat: '{series.name}<br>',
			pointFormat: '{point.name}: <b>{point.y}口</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.y}口',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				},
				startAngle: -90,
				endAngle: 90
			}
		},
		series: [{
			type: 'pie',
			innerSize: '70%',
			name: '平衡分析',
			data: [
				['平衡', 56],
				['欠平衡', 10],
				{
					name: '过平衡',
					y: 18,
					sliced: true,
					selected: true
				},
				['严重欠平衡', 0],
				['严重过平衡', 11],
				['无平衡数据', 0]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container6').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			align: 'center',
			verticalAlign: 'middle',
			x: -25,
			text: '<span style="font-size:17px; color:#76838f;font-family:微软雅黑;">电参诊断</span>'
		},
		tooltip: {
			headerFormat: '{series.name}<br>',
			pointFormat: '{point.name}: {point.y}口'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '{point.name}: {point.y}口'

				},
				startAngle: -90,
				endAngle: 90
			}
		},
		series: [{
			type: 'pie',
			innerSize: '70%',
			name: '电参诊断',
			data: [
				//														['正常', 85],
				['三相电压不均衡', 6],
				{
					name: '三相电流不均衡',
					y: 2,
					sliced: true,
					selected: true
				},
				['过压', 1],
				['缺相', 6],
				['通信故障', 30]
			]
		}],
		credits: {
			enabled: false
		}
	});
});
$(function() {
	var colors = Highcharts.getOptions().colors,
		categories = ['功图诊断', '电参诊断', '平衡分析'],
		data = [{
			y: 59,
			color: colors[0],
			drilldown: {
				name: '功图诊断',
				categories: ['充满不足', '游动凡尔漏失', '供液不足', '出砂', '采集异常'],
				data: [26, 12, 8, 6, 7],
				color: colors[0]
			}
		}, {
			y: 45,
			color: colors[1],
			drilldown: {
				name: '电参诊断',
				categories: ['缺相', '过压', '三相电流不均衡', '三相电压不均衡', '离线'],
				data: [6, 1, 2, 6, 30],
				color: colors[1]
			}
		}, {
			y: 39,
			color: colors[2],
			drilldown: {
				name: '平衡分析',
				categories: ['欠平衡', '过平衡', '严重欠平衡', '严重过平衡', '无平衡数据'],
				data: [10, 18, 0, 11, 0],
				color: colors[2]
			}
		}],
		browserData = [],
		versionsData = [],
		i,
		j,
		dataLen = data.length,
		drillDataLen,
		brightness;
	// 构建数据数组
	for(i = 0; i < dataLen; i += 1) {
		// 添加浏览器数据
		browserData.push({
			name: categories[i],
			y: data[i].y,
			color: data[i].color
		});
		// 添加版本数据
		drillDataLen = data[i].drilldown.data.length;
		for(j = 0; j < drillDataLen; j += 1) {
			brightness = 0.2 - (j / drillDataLen) / 5;
			versionsData.push({
				name: data[i].drilldown.categories[j],
				y: data[i].drilldown.data[j],
				color: Highcharts.Color(data[i].color).brighten(brightness).get()
			});
		}
	}
	// 创建图表
	$('#container_test').highcharts({
		chart: {
			type: 'pie'
		},
		title: {
			text: '不正常井管理'
		},
		subtitle: {
			text: '内环为工况占比，外环为具体的工况'
		},
		yAxis: {
			title: {
				text: '井数'
			}
		},
		plotOptions: {
			pie: {
				shadow: false,
				center: ['50%', '50%']
			}
		},
		tooltip: {
			valueSuffix: '口'
		},
		series: [{
			name: '占比',
			data: browserData,
			size: '50%',
			dataLabels: {
				formatter: function() {
					return this.y > 5 ? this.point.name : null;
				},
				color: 'white',
				distance: -30
			}
		}, {
			name: '井数',
			data: versionsData,
			size: '80%',
			innerSize: '70%',
			dataLabels: {
				formatter: function() {
					// 大于1则显示
					return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '口' : null;
				}
			}
		}],
		drilldown: {
			series: [{
				id: 'animals',
				data: [
					['Cats', 4],
					['Dogs', 2],
					['Cows', 1],
					['Sheep', 2],
					['Pigs', 1]
				]
			}]
		},
		credits: {
			enabled: false
		}
	});
});