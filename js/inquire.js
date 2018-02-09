$(function() {
	$('#container_fsDiagnosis').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '功图诊断',
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
	$('#container_ProductionWave').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
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
	$('#container_ProductionSpread').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '产量',
			data: [
				['150.01~', 22],
				['100.01~150', 43],
				{
					name: '50.01~100',
					y: 12,
					sliced: true,
					selected: true
				},
				['20.01~50', 8],
				['0~20', 10]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container_WellStratStop').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '时率监测',
			data: [
				['运行', 69],
				['未及时停抽', 4],
				{
					name: '长停井',
					y: 35,
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
	$('#container_PowerHM').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '吨液百米耗电量',
			data: [
				
				{
					name: '5.1~10',
					y: 6,
					sliced: true,
					selected: true
				},
				['4.1~5', 13],
				['2.1~4', 15],
				['0~2', 61]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container_Balance').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '平衡分析',
			data: [
				['平衡', 67],
				['欠平衡', 10],
				{
					name: '过平衡',
					y: 18,
					sliced: true,
					selected: true
				}
				//															['严重欠平衡', 0],
				//															['严重过平衡', 0],
				//															['无平衡数据', 0]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container_Communication').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '通信监测',
			data: [
				['在线', 95],
				{
					name: '离线',
					y: 35,
					sliced: true,
					selected: true
				}
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container_Equipment').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '设备保养',
			data: [
				['正常', 70],
				['待一保', 15],
				{
					name: '待二保',
					y: 10,
					sliced: true,
					selected: true
				}
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container_Electric').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '电参诊断',
			data: [
				['正常', 84],
				['三相电流不均衡', 2],
				{
					name: '三相电压不均衡',
					y: 6,
					sliced: true,
					selected: true
				},
				['过压', 1],
				['欠压', 2],
				['通信故障', 35]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container_PowerSpread').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '实时累计能耗',
			data: [
				['250~300', 25],
				['200~250', 32],
				{
					name: '150~200',
					y: 16,
					sliced: true,
					selected: true
				},
				['100~150', 1],
				['50~100', 6],
				['0~50', 15]
			]
		}],
		credits: {
			enabled: false
		}
	});
	$('#container_TimeEffSpread').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
				}
			}
		},
		series: [{
			type: 'pie',
			name: '时率',
			data: [
				//															['0.81~1.0', 0],
				//															['0.61~0.8', 0],
				{
					name: '0.41~0.6',
					y: 69,
					sliced: true,
					selected: true
				},
				['0.21~0.4', 6],
				['0~0.2', 20],
				['0', 35]
			]
		}],
		credits: {
			enabled: false
		}
	});
});