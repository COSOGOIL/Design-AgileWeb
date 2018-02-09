//电流
$(function () {
    $('#container-A').highcharts({
        title: {
            text: '电流',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '电流'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: 'A相电流',
                data: [16.89, 14.2, 18.64, 14.42, 19.64, 13.93,
                       16.76, 13.9, 13.9, 16.98, 15.17, 18.45,
     15.35, 14.18, 14.05, 19.63, 13.97, 14.88,
     16.89, 14.2, 18.64, 14.42, 19.64, 13.93,
     16.76, 13.9, 13.9, 16.98, 15.17, 18.45,
     15.35, 14.18, 14.05, 19.63, 13.97, 14.88,
     16.89, 14.2, 18.64, 14.42, 19.64, 13.93,
     16.76, 13.9, 13.9, 16.98, 15.17, 18.45,
     15.35, 14.18, 14.05, 19.63, 13.97, 14.88,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: 'B相电流',
                data: [16.86, 14.4, 18.62, 14.45, 19.63, 14.13,
                       16.72, 14.01, 14.01, 17.01, 15.14, 18.37,
     15.42, 14.42, 14.11, 19.64, 14.17, 14.95,
     16.86, 14.4, 18.62, 14.45, 19.63, 14.13,
     16.72, 14.01, 14.01, 17.01, 15.14, 18.37,
     15.42, 14.42, 14.11, 19.64, 14.17, 14.95,
     16.86, 14.4, 18.62, 14.45, 19.63, 14.13,
     16.72, 14.01, 14.01, 17.01, 15.14, 18.37,
     15.42, 14.42, 14.11, 19.64, 14.17, 14.95,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: 'C相电流',
                data: [16.55, 14.32, 18.39, 14.32, 19.46, 13.98,
                       16.54, 13.81, 13.81, 16.76, 14.91, 18.18,
     15.19, 14.17, 13.8, 19.31, 13.94, 14.71,
     16.55, 14.32, 18.39, 14.32, 19.46, 13.98,
     16.54, 13.81, 13.81, 16.76, 14.91, 18.18,
     15.19, 14.17, 13.8, 19.31, 13.94, 14.71,
     16.55, 14.32, 18.39, 14.32, 19.46, 13.98,
     16.54, 13.81, 13.81, 16.76, 14.91, 18.18,
     15.19, 14.17, 13.8, 19.31, 13.94, 14.71,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});

//电压
$(function () {
    $('#container-V').highcharts({
        title: {
            text: '电压',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '电压'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: 'A相电压',
                data: [229.23, 228.4, 222.48, 221.58, 220.75, 228.6,
                       229.05, 223.95, 224.18, 228.63, 227.55, 224.1,
     227.93, 229.13, 225.83, 222.15, 227.73, 225,
     229.23, 228.4, 222.48, 221.58, 220.75, 228.6,
     229.05, 223.95, 224.18, 228.63, 227.55, 224.1,
     227.93, 229.13, 225.83, 222.15, 227.73, 225,
     229.23, 228.4, 222.48, 221.58, 220.75, 228.6,
     229.05, 223.95, 224.18, 228.63, 227.55, 224.1,
     227.93, 229.13, 225.83, 222.15, 227.73, 225,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: 'B相电压',
                data: [222.15, 221.03, 224.88, 223.13, 223.53, 221.3,
                       222.65, 216.73, 217.7, 212.83, 220.7, 217.78,
     220.93, 222.72, 219.43, 216.13, 221.6, 219.35,
     222.15, 221.03, 224.88, 223.13, 223.53, 221.3,
     222.65, 216.73, 217.7, 212.83, 220.7, 217.78,
     220.93, 222.72, 219.43, 216.13, 221.6, 219.35,
     222.15, 221.03, 224.88, 223.13, 223.53, 221.3,
     222.65, 216.73, 217.7, 212.83, 220.7, 217.78,
     220.93, 222.72, 219.43, 216.13, 221.6, 219.35,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: 'C相电压',
                data: [223.8, 223.8, 227.88, 226.38, 226.15, 223.7,
                       224.98, 217.23, 220.18, 215, 222.95, 220.25,
     223.33, 224.75, 221.3, 218.08, 224, 221.45,
     223.8, 223.8, 227.88, 226.38, 226.15, 223.7,
     224.98, 217.23, 220.18, 215, 222.95, 220.25,
     223.33, 224.75, 221.3, 218.08, 224, 221.45,
     223.8, 223.8, 227.88, 226.38, 226.15, 223.7,
     224.98, 217.23, 220.18, 215, 222.95, 220.25,
     223.33, 224.75, 221.3, 218.08, 224, 221.45,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});
//有功功率
$(function () {
    $('#container-Power').highcharts({
        title: {
            text: '有功功率',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '有功功率'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '有功功率',
                data: [24.06, -5.05, 15.64, 3.42, 27.72, -3.52,
                       24, 2.24, 2.24, 23.96, 20.98, 15.12,
     20.95, -6.82, 2.44, 27.36, -4.95, 20.31,
     24.06, -5.05, 15.64, 3.42, 27.72, -3.52,
     24, 2.24, 2.24, 23.96, 20.98, 15.12,
     20.95, -6.82, 2.44, 27.36, -4.95, 20.31,
     24.06, -5.05, 15.64, 3.42, 27.72, -3.52,
     24, 2.24, 2.24, 23.96, 20.98, 15.12,
     20.95, -6.82, 2.44, 27.36, -4.95, 20.31,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});
//累计用电量
$(function () {
    $('#container-totalPower').highcharts({
        title: {
            text: '实时日用电量',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '实时日用电量(kW·h)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '实时日用电量',
                data: [0, 2.01, 4.21, 6.24, 8.12, 10.01,
                    12.04, 14.65, 17.05, 19.54, 22.11, 24.56,
     27.03, 30.53, 32.75, 35.23, 37.73, 40.04,
     42.13, 44.67, 47.14, 49.55, 52.07, 54.52,
     57.04, 59.33, 61.65, 64.10, 66.48, 68.75,
     71.12, 73.41, 75.74, 78.02, 80.32, 82.56,
     85.01, 87.26, 89.45, 91.96, 94.32, 96.68,
     99.04, 101.4, 103.76, 106.12, 108.48, 110.84,
     113.2, 115.56, 117.92, 120.28, 122.64, 125,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});



//油压 套压
$(function () {
    $('#container-P').highcharts({
        title: {
            text: '压力',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '压力'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '油压(回压)',
                data: [1.25, 1.48, 1.25, 0.97, 0.89, 0.74,
     0.54, 0.14, 0.37, 0.48, 0.57, 0.67,
     0.57, 0.38, 0.67, 0.56, 0.74, 0.89,
     1.25, 1.48, 1.25, 0.97, 0.89, 0.74,
     0.54, 0.14, 0.37, 0.48, 0.57, 0.67,
     0.57, 0.38, 0.67, 0.56, 0.74, 0.89,
     1.25, 1.48, 1.25, 0.97, 0.89, 0.74,
     0.54, 0.14, 0.37, 0.48, 0.57, 0.67,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '套压',
                data: [2.04, 1.78, 1.38, 1.04, 1.25, 1.57,
     1.96, 1.89, 2.04, 2.34, 2.4, 2.5,
     2.34, 2.04, 2.54, 2.85, 2.57, 2.35,
     2.04, 1.78, 1.38, 1.04, 1.25, 1.57,
     1.96, 1.89, 2.04, 2.34, 2.4, 2.5,
     2.34, 2.04, 2.54, 2.85, 2.57, 2.35,
     2.04, 1.78, 1.38, 1.04, 1.25, 1.57,
     1.96, 1.89, 2.04, 2.34, 2.4, 2.5,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});
//含水率
$(function () {
    $('#container-WaterCut').highcharts({
        title: {
            text: "含水率",
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '含水率'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '含水率',
                data: [99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     99.13, 99.13, 99.13, 99.13, 99.13, 99.13,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});
//动液面
$(function () {
    $('#container-Level').highcharts({
        title: {
            text: "动液面",
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '动液面'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '动液面',
                data: [736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     736.5, 736.5, 736.5, 736.5, 736.5, 736.5,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});
//井口流温
$(function () {
    $('#container-Temperature').highcharts({
        title: {
            text: '井口流温',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '井口流温'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '井口流温',
                data: [92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     92, 92, 92, 92, 92, 92,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});
//生产气油比
$(function () {
    $('#container-GOR').highcharts({
        title: {
            text: '生产气油比',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:00', '0:10', '0:20', '0:30', '0:40', '0:50',
    '1:00', '1:10', '1:20', '1:30', '1:40', '1:50',
    '2:00', '2:10', '2:20', '2:30', '2:40', '2:50',
    '3:00', '3:10', '3:20', '3:30', '3:40', '3:50',
    '4:00', '4:10', '4:20', '4:30', '4:40', '4:50',
    '5:00', '5:10', '5:20', '5:30', '5:40', '5:50',
    '6:00', '6:10', '6:20', '6:30', '6:40', '6:50',
    '7:00', '7:10', '7:20', '7:30', '7:40', '7:50',
    '8:00', '8:10', '8:20', '8:30', '8:40', '8:50',
    '9:00', '9:10', '9:20', '9:30', '9:40', '9:50',
    '10:00', '10:10', '10:20', '10:30', '10:40', '10:50',
    '11:00', '11:10', '11:20', '11:30', '11:40', '11:50',
    '12:00', '12:10', '12:20', '12:30', '12:40', '12:50',
    '13:00', '13:10', '13:20', '13:30', '13:40', '13:50',
    '14:00', '14:10', '14:20', '14:30', '14:40', '14:50',
    '15:00', '15:10', '15:20', '15:30', '15:40', '15:50',
    '16:00', '16:10', '16:20', '16:30', '16:40', '16:50',
    '17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
    '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
    '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
    '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
    '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
    '22:00', '22:10', '22:20', '22:30', '22:40', '22:50',
    '23:00', '23:10', '23:20', '23:30', '23:40', '23:50', '24:00'

   ]
        },
        yAxis: {
            title: {
                text: '生产气油比'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '生产气油比',
                data: [4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     4.4, 4.4, 4.4, 4.4, 4.4, 4.4,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null,
     null, null, null, null, null, null, null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});


//累计产量
$(function () {
    $('#container-Production').highcharts({
        title: {
            text: '产量',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            tickInterval: 12,
            categories: ['0:50',
    '1:50',
    '2:50',
    '3:50',
    '4:50',
    '5:50',
    '6:50',
    '7:50',
    '8:50',
    '9:50',
    '10:50',
    '11:50',
    '12:50',
    '13:50',
    '14:50',
    '15:50',
    '16:50',
    '17:50',
    '18:50',
    '19:50',
    '20:50',
    '21:50',
    '22:50',
    '23:50'

   ]
        },
        yAxis: {
            title: {
                text: '产量(t))'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
   }]
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '产液量',
                data: [131.05,
     133.13,
     132.47,
     130.96,
     132.42,
     136.32,
     137.81,
     131.84,
     131.94,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '产油量',
                data: [
     1.14,
     1.16,
     1.15,
     1.14,
     1.14,
     1.19,
     1.2,
     1.15,
     1.15,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '产水量',
                data: [
     129.91,
     131.97,
     131.32,
     129.82,
     131.27,
     135.13,
     136.61,
     130.69,
     130.76,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]
   }
  ],
        credits: {
            enabled: false
        }
    });

});
//吨液百米耗电量
$(function () {
    $('#container-TLMP').highcharts({
        title: {
            text: '吨液百米耗电量',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: [{
            tickInterval: 12,
            categories: ['0:50',
    '1:50',
    '2:50',
    '3:50',
    '4:50',
    '5:50',
    '6:50',
    '7:50',
    '8:50',
    '9:50',
    '10:50',
    '11:50',
    '12:50',
    '13:50',
    '14:50',
    '15:50',
    '16:50',
    '17:50',
    '18:50',
    '19:50',
    '20:50',
    '21:50',
    '22:50',
    '23:50'
   ]
  }],
        yAxis: [{
                opposite: false,
                title: {
                    text: '吨液百米耗电量(KWh/100m·t)'
                }
    }
   ],
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '吨液百米耗电量',
                data: [
     0.99,
     1.13,
     1.01,
     1.11,
     1.00,
     0.69,
     0.89,
     1.21,
     0.87,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]
   }

  ],
        credits: {
            enabled: false
        }
    });

});


//系统效率
$(function () {
    $('#container-Eff').highcharts({
        title: {
            text: '效率',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: [{
            tickInterval: 12,
            categories: ['0:50',
    '1:50',
    '2:50',
    '3:50',
    '4:50',
    '5:50',
    '6:50',
    '7:50',
    '8:50',
    '9:50',
    '10:50',
    '11:50',
    '12:50',
    '13:50',
    '14:50',
    '15:50',
    '16:50',
    '17:50',
    '18:50',
    '19:50',
    '20:50',
    '21:50',
    '22:50',
    '23:50'

   ]
  }],
        yAxis: [{
                opposite: false,
                title: {
                    text: '百分数%'
                }
    }
   ],
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                groupPadding: 0,
                shadow: false
            }
        },
        tooltip: {
            shared: true,
            crosshairs: true
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '系统效率',
                color: '#FF0000',
                data: [
     27.5,
     24,
     27.1,
     24.5,
     27.2,
     39.2,
     30.6,
     22.5,
     31.2,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '地面效率',
                data: [
     62.3,
     55,
     62,
     56,
     56,
     81,
     65,
     52.2,
     63.6,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]

   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '井下效率',
                data: [
     44.2,
     43.6,
     43.5,
     43.7,
     48.5,
     48.5,
     47.1,
     43.1,
     49.1,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]
   }

  ],
        credits: {
            enabled: false
        }
    });

});
//泵效
$(function () {
    $('#container-PumpEff').highcharts({
        title: {
            text: '泵效',
            x: -20
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: [{
            tickInterval: 12,
            categories: ['0:50',
    '1:50',
    '2:50',
    '3:50',
    '4:50',
    '5:50',
    '6:50',
    '7:50',
    '8:50',
    '9:50',
    '10:50',
    '11:50',
    '12:50',
    '13:50',
    '14:50',
    '15:50',
    '16:50',
    '17:50',
    '18:50',
    '19:50',
    '20:50',
    '21:50',
    '22:50',
    '23:50'

   ]
  }],
        yAxis: [{
                opposite: false,
                title: {
                    text: '百分数%'
                }
    },

   ],
        plotOptions: {

        },
        tooltip: {
            shared: true,
            crosshairs: true
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [

            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '泵效',
                yAxis: 0,
                data: [
     88.8,
     89.8,
     91.2,
     90.8,
     91.2,
     89.6,
     88.9,
     89.8,
     90.9,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null,
     null
    ]
   }

  ],
        credits: {
            enabled: false
        }
    });

});

//选择框
$(function () {
    function initTableCheckbox() {
        var $thr = $('table[id="tablefsdiagramOverlaylist"] thead tr');
        var $checkAllTh = $('<th><input type="checkbox" id="checkAll" name="checkAll" /></th>');
        /*将全选/反选复选框添加到表头最前，即增加一列*/
        $thr.prepend($checkAllTh);
        /*“全选/反选”复选框*/
        var $checkAll = $thr.find('input');
        $checkAll.click(function (event) {
            /*将所有行的选中状态设成全选框的选中状态*/
            $tbr.find('input').prop('checked', $(this).prop('checked'));
            /*并调整所有选中行的CSS样式*/
            if ($(this).prop('checked')) {
                $tbr.find('input').parent().parent().addClass('default');
            } else {
                $tbr.find('input').parent().parent().removeClass('default');
            }
            /*阻止向上冒泡，以防再次触发点击操作*/
            event.stopPropagation();
        });
        /*点击全选框所在单元格时也触发全选框的点击操作*/
        $checkAllTh.click(function () {
            $(this).find('input').click();
        });
        var $tbr = $('table[id="tablefsdiagramOverlaylist"] tbody tr');
        var $checkItemTd = $('<td><input type="checkbox" name="checkItem" /></td>');
        /*每一行都在最前面插入一个选中复选框的单元格*/
        $tbr.prepend($checkItemTd);
        /*点击每一行的选中复选框时*/
        $tbr.find('input').click(function (event) {
            /*调整选中行的CSS样式*/
            $(this).parent().parent().toggleClass('default');
            /*如果已经被选中行的行数等于表格的数据行数，将全选框设为选中状态，否则设为未选中状态*/
            $checkAll.prop('checked', $tbr.find('input:checked').length == $tbr.length ? true : false);
            /*阻止向上冒泡，以防再次触发点击操作*/
            event.stopPropagation();
        });
        /*点击每一行时也触发该行的选中操作*/
        $tbr.click(function () {
            $(this).find('input').click();
        });
    };
    initTableCheckbox();
})

//日产量
$(function () {
    $('#container-DailyProduction').highcharts({
        title: {
            text: '日产量',
            align: 'center'
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m月%e日'
            }
        },
        yAxis: [{
                opposite: false,
                title: {
                    text: '产量(t)'
                }
   },
            {
                opposite: false,
                title: {
                    text: '含水率(%)'
                },
                max: 100
   },

  ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 0,
                name: '日产液量',
                //			color: '#FF0000',
                data: [131.05, 132.77, 114.84, 137.55, 134.33, 130.07, 126.12, 121.82, 124.11, 126.03, 127.81, 129.55],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 0,
                name: '日产油量',
                //			color: '#FF0000',
                data: [1.78, 1.79, 0.91, 2.13, 1.01, 2.3, 1.66, 0.72, 1.07, 1.81, 1.27, 1.15],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 0,
                name: '日产水量',
                //			color: '#FF0000',
                data: [129.27, 130.98, 113.93, 135.42, 133.32, 127.77, 124.46, 121.1, 123.04, 124.22, 126.54, 128.4],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 1,
                name: '含水率',
                //			color: '#FF0000',
                data: [98.64, 98.65, 99.21, 98.45, 99.25, 98.23, 98.68, 99.41, 99.14, 98.56, 99.01, 99.11],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   }
  ],
        credits: {
            enabled: false
        }
    });
});
//日时率
$(function () {
    $('#container-DailyTimeEff').highcharts({
        title: {
            text: '日运行时率',
            align: 'center'
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m月%e日'
            }
        },
        yAxis: [{
                opposite: false,
                title: {
                    text: '日运行时率(小数)'
                },
                max: 1
   },
            {
                opposite: false,
                title: {
                    text: '日运行时间(h)'
                }
   }

  ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 0,
                name: '日运行时率',
                //			color: '#FF0000',
                data: [1.0, 1.0, 0.88, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 1,
                name: '日运行时间',
                //			color: '#FF0000',
                data: [24, 24, 21.12, 24, 24, 24, 24, 24, 24, 24, 24, 24],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   }
  ],
        credits: {
            enabled: false
        }
    });
});
//日用电量
$(function () {
    $('#container-DailyPowerCon').highcharts({
        title: {
            text: '日用电量',
            align: 'center'
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m月%e日'
            }
        },
        yAxis: [{
                opposite: false,
                title: {
                    text: 'KW·h'
                }
   },
            {
                opposite: false,
                title: {
                    text: 'KW·h/100m·t'
                }
   }

  ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 0,
                name: '日用电量',
                //			color: '#FF0000',
                data: [300.4, 302.3, 262.5, 300.2, 299.4, 299.8, 298.6, 302.4, 300.8, 300.4, 298.6, 300.2],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                yAxis: 1,
                name: '吨液百米耗电量',
                //			color: '#FF0000',
                data: [0.87, 0.87, 0.88, 0.86, 0.87, 0.9, 0.91, 0.89, 0.87, 0.88, 0.86, 0.87],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   }
  ],
        credits: {
            enabled: false
        }
    });
});
//日效率
$(function () {
    $('#container-DailySysEff').highcharts({
        title: {
            text: '日系统效率',
            align: 'center'
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m月%e日'
            }
        },
        yAxis: [{
                opposite: false,
                title: {
                    text: '效率(%)'
                }
   },

  ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '系统效率',
                //			color: '#FF0000',
                data: [31.4, 31.1, 30.7, 31.5, 32.1, 31.4, 30.6, 30.6, 32.2, 31.2, 30.2, 31.2],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '地面效率',
                //			color: '#FF0000',
                data: [49.3, 48.5, 48.7, 48.1, 49.7, 49.5, 48.9, 48.5, 49.2, 48.6, 48.3, 49.1],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   },
            {
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '井下效率',
                //			color: '#FF0000',
                data: [63.7, 64.1, 63.1, 65.4, 64.6, 63.4, 62.5, 63.1, 65.4, 64.2, 62.5, 63.6],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   }
  ],
        credits: {
            enabled: false
        }
    });
});
//日平衡度
$(function () {
    $('#container-DailyBalance').highcharts({
        title: {
            text: '日平衡度',
            align: 'center'
        },
        subtitle: {
            text: null,
            x: -20
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%m月%e日'
            }
        },
        yAxis: [{
                opposite: false,
                title: {
                    text: '综合平衡度(%)'
                }
   },

  ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
                type: 'spline',
                marker: {
                    enabled: false
                },
                name: '日综合平衡度',
                //			color: '#FF0000',
                data: [120.3, 116.4, 106.9, 109.6, 116.5, 112.3, 110.7, 106.9, 107.8, 114.2, 117.5, 113.5],
                pointStart: Date.UTC(2017, 11, 17),
                pointInterval: 24 * 3600 * 1000
   }
  ],
        credits: {
            enabled: false
        }
    });
});
//总产量
//$(function() {
//	$('#container-DailyTotalProduction').highcharts({
//		title: {
//			text: '日总产量',
//			align:'center'
//		},
//		subtitle: {
//			text: null,
//			x: -20
//		},
//		xAxis: {
//			type: 'datetime',
//			dateTimeLabelFormats: {
//				day: '%m月%e日'
//			}
//		},
//		yAxis: [{
//				opposite: false,
//				title: {
//					text: '吨 t'
//				}
//			},
//
//		],
//		tooltip: {
//			shared: true,
//			crosshairs: true
//		},
//		legend: {
//			layout: 'horizontal',
//			align: 'center',
//			verticalAlign: 'bottom',
//			borderWidth: 0
//		},
//		series: [{
//				type: 'spline',
//				marker: {
//					enabled: false
//				},
//				name: '总产液量',
//				//			color: '#FF0000',
//				data: [3666.3, 5673.4, 5962.8, 5866.4, 5841.1, 5681.5, 6063.1, 5962.2, 5252.0, 5214.3, 5666.7, 5874.5],
//				pointStart: Date.UTC(2017, 10, 12),
//				pointInterval: 24 * 3600 * 1000
//			},
//			{
//				type: 'spline',
//				marker: {
//					enabled: false
//				},
//				name: '总产油量',
//				//			color: '#FF0000',
//				data: [1539.3, 2382.4, 2476.8, 2425.4, 2413.1, 2383.5, 2514.1, 2501.2, 2345.0, 2333.3, 2374.7, 2455.5],
//				pointStart: Date.UTC(2017, 10, 12),
//				pointInterval: 24 * 3600 * 1000
//			}
//		],
//		credits: {
//			enabled: false
//		}
//	});
//});




function SetEveryOnePointColor(chart) { // 设置每一个数据点的颜色横向渐变
    var colors = chart.options.colors;
    var pointsList = chart.series[0].points; //获得第一个序列的所有数据点
    for (var i = 0; i < pointsList.length; i++) { //遍历设置每一个数据点颜色
        chart.series[0].points[i].update({
            color: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 1,
                    y2: 0
                }, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
                stops: [
                            [0, Highcharts.Color(colors[i * 2]).setOpacity(1).get('rgba')],
//                            [0.5, 'rgb(255, 255, 255)'],
//                            [0.5, Highcharts.Color(colors[i*2]).setOpacity(1).get('rgba')],
                            [1, Highcharts.Color(colors[i * 2 + 1]).setOpacity(1).get('rgba')]
                        ]
            }
        });
    }
};
/* 
 * 初始化杆柱应力数据
 */
function initRodPressChart(xdata, ydata, jh, cjsj, divid) {
    var mychart = new Highcharts.Chart({
        chart: {
            type: 'column', // 柱状图
            renderTo: divid, // 图形放置的位置
            zoomType: 'xy', // 沿xy轴放大
            options3d: { // 3D效果
                enabled: false, // 是否显示3D效果
                alpha: 0, // 内旋角度
                beta: 0, // 外旋角度
                depth: 100, // 图形的全深比
                frame: {
                    back: { // X与Y形成的背面面板
                        color: 'transparent', // 面板颜色
                        size: 1 // 面板厚度
                    },
                    bottom: { // X与Z形成的底部面板
                        color: '#fdfdfd', // 面板颜色
                        size: 0 // 面板厚度
                    },
                    side: { // Y与Z形成的侧面面板
                        color: '#fdfdfd', // 面板颜色
                        size: 2 // 面板厚度
                    }
                },
                viewDistance: 10 // 图形前面看图的距离
            }
        },
        title: {
            text: '杆柱应力', // 杆柱应力      
            style: {
                fontSize: '13px'
            }
        },
        subtitle: {
            text: jh + ' [' + cjsj + ']'
        },
        colors: ['#00bc00', '#006837', '#00FF00', '#006837', '#00bc00', '#006837'],
        credits: {
            enabled: false
        },
        xAxis: {
            categories: xdata,
            labels: {
                rotation: 0,
                align: 'center',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Verdana, sans-serif'
                }
            },
            gridLineWidth: 0 // 网格线宽度
        },
        yAxis: {
            min: 0,
            title: {
                text: '应力百分比(%)' // 应力百分比(%)                                                          
            },
            allowDecimals: false, // 刻度值是否为小数
            minorTickInterval: '' // 不显示次刻度线
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                pointWidth: 40, // 柱子宽度
                borderWidth: 2
                    //		        		color: '#000000'
            }
        },
        series: [{
            name: '应力百分比(%)', // 应力百分比(%)
            data: ydata,
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#0066cc',
                align: 'center',
                x: 0,
                y: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'SimSun'
                }
            }
          }]
    });
    SetEveryOnePointColor(mychart); //设置每一个数据点的颜色值
};

/* 
 * 初始化泵效组成数据
 */
function initPumpEfficiencyChart(ydata, jh, cjsj, divid, title, yname) {
    $('#' + divid).highcharts({
        chart: {
            type: 'column', // 柱状图
            zoomType: 'xy' // 沿xy轴放大
        },
        title: { // 标题                                                                      
            text: '泵效组成 ' // 泵效组成  
        },
        subtitle: { // 子标题                                                                   
            text: jh + ' [' + cjsj + ']'
        },
        colors: ['#66ffcc', '#009999', '#ffcc33', '#ff6633', '#00ffff', '#3366cc', '#ffccff', '#cc0000', '#6AF9C4'],
        credits: { // 版权信息
            enabled: false
        },
        xAxis: {
            categories: [
                           'η冲程', // 'η冲程'
                           'η充满', // 'η充满'
                           'η漏失', // 'η漏失'
                           'η收缩' // 'η收缩'
                       ],
            gridLineWidth: 0 // 网格线宽度
        },
        tooltip: {
            enabled: false // 不显示提示框
        },
        yAxis: {
            min: 0,
            title: {
                text: '百分数(%) ' // 百分数(%)                                                          
            },
            minorTickInterval: '' // 不显示次刻度线
        },
        legend: {
            enabled: false
        },
        series: [{
            data: ydata,
            dataLabels: { // 柱子上的数据标签
                enabled: true,
                rotation: 0,
                color: '#0066cc',
                align: 'center',
                x: 0,
                y: 0,
                style: {
                    fontSize: '13px',
                    fontFamily: 'SimSun'
                }
            }
          }]

    }, function (chart) {
        SetEveryOnePointColor(chart); // 设置每一个数据点的颜色渐变
    });
};

/* 
 * 初始化多个功图曲线数据
 */
function initMultiSurfaceCardChart(series, title, jh, cjsj, divid) {
    var mychart = new Highcharts.Chart({
        chart: {
            type: 'scatter', // 散点图   
            renderTo: divid,
            zoomType: 'xy'
        },
        title: {
            text: title
        },
        subtitle: {
            text: jh + ' [' + cjsj + ']'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                enabled: true,
                text: '位移（m）', // 位移（m）
                align: 'high'
            },
            startOnTick: false, //是否强制轴线在标线处开始
            endOnTick: false, //是否强制轴线在标线处结束                                                                  
            showLastLabel: true,
            minorTickInterval: '' // 最小刻度间隔
                //min:0                                                            
        },
        yAxis: {
            title: {
                text: '载荷（kN）' // 载荷（kN）                                                          
            },
            allowDecimals: false, // 刻度值是否为小数
            //endOnTick: false,        //是否强制轴线在标线处结束   
            minorTickInterval: '' // 不显示次刻度线
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 0,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#646464'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.x}, {point.y}'
                }
            }
        },
        series: series
    });
};

function initSurfaceCardChart(pointdata, jh, cjsj, llszh, llxzh, zdzh, zxzh, cch, cci, rcyl, gklx, divid, isShowAll) {
    var xtext = '<span style="text-align:center;">位移(m)<br />';
    if (isShowAll) {
        xtext += '最大载荷:' + zdzh + 'kN 冲程:' + cch + 'm 产液:' + rcyl + 't/d<br / > ';
        xtext += '最小载荷:' + zxzh + 'kN 冲次:' + cci + '/min 工况:' + gklx + '<br />';
    }
    xtext += '</span>';
    var upperlimit = parseFloat(zdzh) + 10;
    if (parseFloat(llszh) == 0 || parseFloat(zdzh) == 0) {
        upperlimit = null
    } else if (parseFloat(llszh) >= parseFloat(zdzh)) {
        upperlimit = parseFloat(llszh) + 10;
    }
    var mychart = new Highcharts.Chart({
        chart: {
            type: 'scatter', // 散点图   
            renderTo: divid,
            zoomType: 'xy',
            reflow: true
        },
        title: {
            text: '地面功图' // 地面功图                        
        },
        subtitle: {
            text: jh + ' [' + cjsj + ']'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text: xtext, // 坐标+显示文字
                useHTML: false,
                margin: 5,
                style: {
                    color: '#000',
                    fontWeight: 'normal',
                    padding: '5px'
                }
            },
            startOnTick: false, //是否强制轴线在标线处开始
            endOnTick: false, //是否强制轴线在标线处结束                                                        
            showLastLabel: true,
            allowDecimals: false, // 刻度值是否为小数
            //		            min:0,
            minorTickInterval: '' // 最小刻度间隔
        },
        yAxis: {
            title: {
                text: '载荷（kN）', // 载荷（kN） 
                style: {
                    color: '#000',
                    fontWeight: 'normal'
                }
            },
            allowDecimals: false, // 刻度值是否为小数
            minorTickInterval: '', // 不显示次刻度线
            min: 0, // 最小值
            max: upperlimit,
            plotLines: [{ //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                color: '#d12',
                dashStyle: 'Dash', //Dash,Dot,Solid,默认Solid
                label: {
                    text: llszh,
                    align: 'right',
                    x: -10
                },
                width: 3,
                value: llszh, //y轴显示位置
                zIndex: 10
                 }, {
                color: '#d12',
                dashStyle: 'Dash',
                label: {
                    text: llxzh,
                    align: 'right',
                    x: -10
                },
                width: 3,
                value: llxzh, //y轴显示位置
                zIndex: 10
                 }]
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 100,
            y: 70,
            floating: true,
            backgroundColor: '#FFFFFF',
            borderWidth: 1,
            enabled: false
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 0,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: '#646464'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '',
                    pointFormat: '{point.x},{point.y}'
                }
            }
        },
        series: [{
            name: '',
            color: '#00ff00',
            lineWidth: 3,
            data: pointdata
          }]
    });
};

function initSingleYCurveChartFn(catagories, series, tickInterval, divId, title, subtitle, ytitle, xtitle) {
    var mychart = new Highcharts.Chart({
        chart: {
            type: 'spline',
            renderTo: divId,
            shadow: true,
            borderWidth: 0,
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: title,
            x: -20
        },
        subtitle: {
            text: subtitle
        },
        colors: ['#800000', '#008C00', '#000000', '#0000FF', '#F4BD82', '#FF00FF'],
        xAxis: {
            type: 'datetime',
            title: {
                text: xtitle
            },
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat("%Y-%m-%d", this.value);
                },
                rotation: 0, //倾斜度，防止数量过多显示不全  
            },
        },
        yAxis: [{
            lineWidth: 1,
            min: 0,
            title: {
                text: ytitle,
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }
            },
            labels: {
                formatter: function () {
                    return Highcharts.numberFormat(this.value, 2);
                }
            },
            plotLines: [{
                color: '#d12',
                dashStyle: 'Dash', //Dash,Dot,Solid,默认Solid
                label: {
                    text: '100%',
                    align: 'right',
                    x: -10
                },
                width: 3,
                value: 100, //y轴显示位置
                zIndex: 10
       }]
      }],
        tooltip: {
            style: {
                color: '#333333',
                fontSize: '12px',
                padding: '8px'
            },
            dateTimeLabelFormats: {
                millisecond: '%Y-%m-%d %H:%M:%S.%L',
                second: '%Y-%m-%d %H:%M:%S',
                minute: '%Y-%m-%d %H:%M',
                hour: '%Y-%m-%d %H',
                day: '%Y-%m-%d',
                week: '%m-%d',
                month: '%Y-%m',
                year: '%Y'
            }
        },
        plotOptions: {
            spline: {
                lineWidth: 1,
                fillOpacity: 0.3,
                marker: {
                    enabled: true,
                    radius: 3, //曲线点半径，默认是4
                    states: {
                        hover: {
                            enabled: true,
                            radius: 6
                        }
                    }
                },
                shadow: true
            }
        },
        legend: {
            enabled: false,
            layout: 'vertical', //图例数据项的布局。布局类型： "horizontal" 或 "vertical" 即水平布局和垂直布局 默认是：horizontal.
            align: 'center', //设定图例在图表区中的水平对齐方式，合法值有left，center 和 right,默认为center
            verticalAlign: 'middle', //设定图例在图表区中的垂直对齐方式，合法值有 top，middle 和 bottom,默认为bottom
            borderWidth: 1,
            floating: false //图例是否浮动，设置浮动后，图例将不占位置
        },
        series: series
    });
};

function initBalanceCurveChart(catagories, series, divId, titletext, ytext, xtext) {
    $('#' + divId).highcharts({
        chart: {
            type: 'spline',
            shadow: true,
            borderWidth: 0,
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: titletext,
            x: -20
        },
        colors: ['#000000', '#0000FF', '#008C00', '#800000', '#F4BD82', '#FF00FF'],
        xAxis: {
            categories: catagories,
            tickInterval: 20,
            title: {
                text: xtext
            }
        },
        yAxis: {
            //					min: 0,
            lineWidth: 1,
            title: {
                text: ytext,
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }
            },
            max: 80,
            min: -80,
            labels: {
                formatter: function () {
                    return Highcharts.numberFormat(this.value, 2);
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            crosshairs: true,
            enabled: true,
            style: {
                color: '#333333',
                fontSize: '12px',
                padding: '8px'
            },
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y;
            },
            valueSuffix: ''
        },
        plotOptions: {
            spline: {
                lineWidth: 3,
                fillOpacity: 0.3,
                marker: {
                    enabled: true,
                    radius: 0, //曲线点半径，默认是4
                    //symbol: 'triangle' ,//曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                    states: {
                        hover: {
                            enabled: true,
                            radius: 6
                        }
                    }
                },
                shadow: true
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 1
        },
        series: series
    });
};

function initBalanceCurveChartThreeY(catagories, series, divId, titletext, ytext, xtext) {
    $('#' + divId).highcharts({
        chart: {
            //					renderTo : divId,
            type: 'spline',
            shadow: true,
            borderWidth: 0,
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: titletext,
            x: -20
                // center
        },
        colors: ['#000000', '#0000FF', '#008C00', '#800000', '#F4BD82', '#FF00FF'],
        xAxis: {
            categories: catagories,
            tickInterval: 20,
            title: {
                text: xtext
            }
        },
        yAxis: [{
            //					min: 0,
            lineWidth: 1,
            title: {
                text: '位移(m)',
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }
            },
            labels: {
                formatter: function () {
                    return Highcharts.numberFormat(this.value, 2);
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
       }]
    }, {
            //					min: 0,
            lineWidth: 1,
            title: {
                text: '速度(m/s)',
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }
            },
            labels: {
                formatter: function () {
                    return Highcharts.numberFormat(this.value, 2);
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
       }]
    }, {
            //					min: 0,
            lineWidth: 1,
            title: {
                text: '加速度(m/s²)',
                style: {
                    color: '#000000',
                    fontWeight: 'bold'
                }
            },
            labels: {
                formatter: function () {
                    return Highcharts.numberFormat(this.value, 2);
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
       }]
    }],
        tooltip: {
            crosshairs: true,
            enabled: true,
            style: {
                color: '#333333',
                fontSize: '12px',
                padding: '8px'
            },
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' + this.x + ': ' + this.y;
            },
            valueSuffix: ''
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                fillOpacity: 0.3,
                marker: {
                    enabled: true,
                    radius: 3, //曲线点半径，默认是4
                    //symbol: 'triangle' ,//曲线点类型："circle", "square", "diamond", "triangle","triangle-down"，默认是"circle"
                    states: {
                        hover: {
                            enabled: true,
                            radius: 6
                        }
                    }
                },
                shadow: true
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 1
        },
        series: series
    });
};

function initTimeEffChart(divid, value, valueSuffix, text) {
    var chart1 = Highcharts.chart(divid, {
        chart: {
            type: 'solidgauge'
        },
        title: {
            text: null
        },
        pane: {
            center: ['50%', '85%'],
            size: '120%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            min: 0,
            max: 1,
            stops: [
            [0.1, '#DF5353'], // red
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#55BF3B'] // green
        ],
            title: {
                text: text,
                y: -90
            },
            //            <text x="169" text-anchor="middle" class="highcharts-title" style="color:#000;font-size:18px;font:bold 16px &quot;Trebuchet MS&quot;, Verdana, sans-serif;fill:#000;" y="24"><tspan>日实时运行时率</tspan></text>
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            labels: {
                y: 16
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        series: [{
            name: text,
            data: [value],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">' + valueSuffix + '</span></div>'
            },
            tooltip: {
                valueSuffix: valueSuffix
            }
    }]
    });
};