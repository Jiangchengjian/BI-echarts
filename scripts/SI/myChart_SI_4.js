var myChart_SI_4 = echarts.init(document.getElementById('SI_4'));
 var  option_SI_4 = {
    color: ['#ffd285', '#00a2ee', '#ec4863'],
    title: [{
        text: '极度危险医院',
        left: '28%',
        top: '8%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize:"12px"
        }
    },{
        text: '较高安全隐患医院',
        left: '70%',
        top: '8%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize:"12px"
        }
    }],
    series: [ 
    {
        type: 'pie',
         center: ['30%', '60%'],
        radius: ['35%', '50%'],
        label: {
            normal: {
              position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#00a2ee'
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
            // name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#db1616'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                    },
                    // formatter: '\n三方快捷登陆'

                }
            }
        }]
    },
    {
        type: 'pie',
        center: ['70%', '60%'],
        radius: ['35%', '50%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#00a2ee'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    // position:"center",
                    textStyle: {
                        color: '#fff',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 100,
            // name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#db6100'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff',
                    },
                    // formatter: '\n三方快捷登陆'
                }
            }
        }]
    }]
}
myChart_SI_4.setOption(option_SI_4)