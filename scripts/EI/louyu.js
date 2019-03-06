$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('louyu'));	
	
	option = {
		legend: {
		    data: ['电能耗偏离度', '水能耗偏离度', '气能耗偏离度', '综合能耗偏离度'],
		    top: 10,
		    textStyle: {
		       	color: '#ccd3e2'
		    }
		},
	    xAxis: {
	        data: ['住院楼', '门诊楼', '医技楼', '科研楼', '行政楼', '综合楼', '感染楼', '其他'],
	        name: '建筑分类',
	        nameTextStyle: {
	            color: '#CCD3E2',
	            fontSize: 14
	        },
	        splitLine: {
	            show: false
	        },
	        axisTick: {
		        show: false
		    },
	        axisLine: {
	            lineStyle: {
	                color: '#CCD3E2'
	            }
	        }
	    },
	    tooltip: {//移入效果
	        trigger: 'axis'	               
	    },
	    grid: {
	    	top:'10%',
	        left: '5%',
	        right: '10%',
	        bottom: '8%',
	        containLabel: true
	    },
	    yAxis: [{
	        name: '偏离度',
	        type: 'value',
	        nameLocation: 'end',
	        nameTextStyle: {
	            color: '#CCD3E2',
	            fontSize: 14
	        },
	        axisTick: {
		        show: false
		    },
	        axisLine: {
	            lineStyle: {
	                color: '#CCD3E2'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    }],
	    series: [{
	        name: '综合能耗偏离度',
	        type: 'bar',
	        data: [0.5, 7.5, -3, -1, 5, -0.5, 7.5, -3],
	        barWidth: '20',	
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1,
	                    [
	                    	{offset: 0, color: '#16B8E9'},
	                        {offset: 1, color: '#27D08E'}
	                        
	                    ]
	                )
	            }
	        }
	    },
	    {
	        name: '电能耗偏离度',
	        type: 'line',
	        smooth: false,//是否平滑曲线显示
	        showAllSymbol: true,//是否全部主轴显示
	        symbol: 'emptyCircle',//显示样子
//	        symbolSize: 10,//显示大小
	        itemStyle: {
	            normal: {
	                color: '#6CF46C'
	            }
	        },
	        data: [0.5, 7.5, -3, -1, 5, -0.5, -3, -1],
	    },
	    {
	        name: '水能耗偏离度',
	        type: 'line',
	        smooth: false,//是否平滑曲线显示
	        showAllSymbol: true,//是否全部主轴显示
	        symbol: 'emptyCircle',//显示样子
//	        symbolSize: 10,//显示大小
	        itemStyle: {
	            normal: {
	                color: '#E2D61A'
	            }
	        },
	        data: [5, 2.5, -4, 1, -5, -6.5, 2.5, -4],
	    },
	    {
	        name: '气能耗偏离度',
	        type: 'line',
	        smooth: false,//是否平滑曲线显示
	        showAllSymbol: true,//是否全部主轴显示
	        symbol: 'emptyCircle',//显示样子
//	        symbolSize: 10,//显示大小
	        itemStyle: {
	            normal: {
	                color: '#0068B7'
	            }
	        },
	        data: [4, -2.5, 4, 3, 5, -6.5, -2.5, 4],
	    }]
	};

	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})