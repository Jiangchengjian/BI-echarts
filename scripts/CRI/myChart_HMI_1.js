var myChart_HMI_1 = echarts.init(document.getElementById('HMI_1'));
var defaultFontSize = 14,
    defaultTextColor = '#fff',
    defaultGlobalColor = ['#5d9cec', '#62c87f', '#f15755', '#fc863f', '#7053b6'],
    defaultFontFamily = 'microsoft yahei',
    defaultBackgroundColor = '#fff',
    defaultShadowColor = 'rgba(204, 214, 235, 0.247059)';
 var  option_HMI_1 = {
    title: {
        text: '不同等级医院维修指数 CRI',
        left: '74%',
        top: '2%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    // backgroundColor: defaultBackgroundColor, // 背景色，默认无背景。
    color: defaultGlobalColor, // 调色盘颜色列表。
    textStyle: { // 全局字体样式
        color: defaultTextColor,
        fontSize: defaultFontSize
    },
    legend: {
        orient: 'vertical',
        top: "20%",
        right: "right",
        itemWidth: 10,
        itemHeight: 10,
        width: 500,
        itemBorderRadius: 8,
        textStyle: {
            color: "#d7d7d7"
        },
        data: ['开机指数', '故障指数', '维保达成指数', '强检过期指数', '事故指数','设备年限指数']
    },
    tooltip: { // 提示框组件
        trigger: 'item', // 触发类型 可选为：'axis' | 'item' | 'none'
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: defaultShadowColor
            }
        }
    },
    radar: {
        // shape: 'circle',
        //设置雷达图的位置，
        center: ['35%', '50%'],
        //设置雷达图的大小，
        radius: 85,
         splitNumber: 2,//间隔
        splitArea: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: ['#eae9e9', '#eae9e9', '#eae9e9', '#eae9e9', '#eae9e9', '#6a7791']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#eae9e9'
            }
        },
        indicator: [{
            name: '开机指数',
            max: 30
        }, {
            name: '故障指数',
            max: 30
        }, {
            name: '事故指数',
            max: 30
        }, {
            name: '强检过期指数',
            max: 30
        }, {
            name: '设备年限指数',
            max: 30
        },{
            name: '维保达成指数',
            max: 20
        }]
    },
    series: [{
        name: '雷达图',
        type: 'radar',
        symbol: 'none',
        // areaStyle: {
        //     normal: {
        //         opacity: .4
        //     }
        // },
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 2
                }
            },
            emphasis: {
                areaStyle: {
                    opacity: .3
                }
            }
        },
        data: [{
            value: [17.2, 7.9, 1.6, 0.8, 0.8],
            name: '开机指数',
            z: 3
        }, {
            value: [5.4, 2.6, 1.2, 1.0, 0.5],
            name: '故障指数',
            z: 1
        }, {
            value: [28.0, 8.4, 6.1, 1.9, 0.8],
            name: '维保达成指数',
            z: 5
        }, {
            value: [22.3, 5.0, 4.5, 1.7, 1.3],
            name: '强检过期指数',
            z: 4
        }, {
            value: [10.2, 2.9, 3.6, 1.4, 0.2],
            name: '事故指数',
            z: 2
        },{
            value: [1.2, 4.9, 8.6, 1.4, 1.2],
            name: '设备年限指数',
            z: 2
        }]
    }]
};
myChart_HMI_1.setOption(option_HMI_1);