var myChart_hos_2  = echarts.init(document.getElementById('hos_2'));
var option_hos_2 =  {
    // backgroundColor: "#a73e5c",
    color: ['#25b725', '#ff733f', '#a40000'],

    title: [],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 90,
        top: '7%',
        textStyle: {
            color: '#ffd285',
        },
        data: ['事故', '强检过期', '维保过期']
    },
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#909090'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        boundaryGap: false,
        data: ['1月', '3月', '5月', '7月', '9月', '11月']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#909090'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#909090'
            }
        },
        "axisTick": {
            "show": false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            }
        },
        type: 'value'
    },
    series: [{
        name: '事故',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [90, 50, 39, 50, 120, 82, 80]
    }, {
        name: '强检过期',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [70, 50, 50, 87, 90, 80, 70]
    }, {
        name: '维保过期',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
        data: [290, 200,20, 132, 15, 200, 90]
    }, 
    {
        type: 'pie',
        center: ['83%', '33%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '污染来源分析',
            itemStyle: {
                normal: {
                    color: '#db1616'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 180,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#00a2ee'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',

                    },
                    formatter: '\n总维保完成率'
                }
            }
        }]
    },


    {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '污染来源分析',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#fff',
                         fontSize: 14

                    }
                }
            }
        }, {
            value: 100,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#00a2ee'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                    },
                    formatter: '\n总强检完成率'
                }
            }
        }]
    }]
}
myChart_hos_2.setOption(option_hos_2);