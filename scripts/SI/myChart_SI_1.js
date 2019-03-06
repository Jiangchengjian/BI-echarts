var myChart_SI_1 = echarts.init(document.getElementById('SI_1'));
 var  option_SI_1 = {
    color: ['#00A0E9', '#00A0E9', '#ec4863'],
    title: [ {
        text: '设备运行数据',
        left: '48%',
        top: '2%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
        }
    },{
        text: '涉及医院'+32,
        left: '86%',
        top: '10%',
        textAlign: 'center',
        textStyle: {
            color: '#009BFE',
            fontSize:"14"
        }
    },{
        text: '平均运行数据',
        left: '18%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize:"14"
        }
    },{
         text: '平均故障率',
        left: '48%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize:"14"
        }
    },{
        text: '平均维保达成率',
        left: '78%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontSize:"12"

        }
    }],
    series: [ 
    {
        type: 'pie',
        center: ['20%', '40%'],
        radius: ['25%', '31%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 335,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#00A0E9'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#00A0E9',
                        fontSize: 14

                    }
                }
            }
        }, {
            value: 180,
            // name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#18E0E2'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00A0E9'
                    },
                    // formatter: '\n手机号注册'
                }
            }
        }]
    },
    {
        type: 'pie',
        center: ['50%', '40%'],
        radius: ['25%', '31%'],
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
                    color: '#00A0E9'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#00A0E9',
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
                    color: '#18E0E2'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    // formatter: '\n三方快捷登陆'

                }
            }
        }]
    },
    {
        type: 'pie',
        center: ['80%', '40%'],
        radius: ['25%', '31%'],
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
                    color: '#00A0E9'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    // position:"center",
                    textStyle: {
                        color: '#00A0E9',
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
                    color: '#18E0E2'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    // formatter: '\n三方快捷登陆'
                }
            }
        }]
    }]
}
myChart_SI_1.setOption(option_SI_1);