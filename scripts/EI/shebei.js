
$(document).ready(function() {
	var myChart = echarts.init(document.getElementById('shebei'));
	var option =  {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            lineStyle: {
	                color: '#57617B'
	            }
	        }
	    },
	    legend: {
	        icon: 'pin',
	        left: "center",
	        itemWidth: 14,
	        itemHeight: 5,
	        itemGap: 13,
	        data: ['动力设备', '空调设备', '特种设备', '照明设备'],
	        right: '4%',
	        bottom: '5%',
	        textStyle: {
	            fontSize: 12,
	            color: '#ccd3e2'
	        }
	    },
	    grid: {
	    	top: '3%',
	        left: '3%',
	        right: '4%',
	        bottom: '15%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        boundaryGap: false,
	        axisLine: {
	            lineStyle: {
	              	color: '#ccd3e2'
		        }
		    },
		    splitLine: {
	        	show: true,	        	
	        	lineStyle: {
			        // 使用深浅的间隔色
			        color: ['#272938'],
			        width: 1,
			        type: 'dotted'
			    }
	        },
		    axisLabel: {//字
		        textStyle: {
		            color: '#ccd3e2',		            
		        }
		    },
		    axisTick: {
		        show: false
		    },
	        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	    }],
	    yAxis: [{
	        type: 'value',
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	        	show: false,
	            lineStyle: {
	                color: '#CCD3E2'
	            }
	        },
	        axisLabel: {
	            margin: 10,
	            textStyle: {
	                fontSize: 14,
	                color: '#ccd3e2'
	            }
	        },
	        splitLine: {
	        	show: true,	        	
	        	lineStyle: {
			        // 使用深浅的间隔色
			        color: ['#272938'],
			        width: 1,
			    }
	        },
	    }],
	    series: [{
	        name: '动力设备',
	        type: 'line',
	        smooth: true,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(11, 159, 159, 1)'
	                }, {
	                    offset: 1,
	                    color: 'rgba(0, 0, 0, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: '#14D1D1'
	            }
	        },
	        data: [66.3,76.4,67.5,85.6,78.1,54.8,89.6,64.1,80.1,72.4,75.8,64.7]
	    }, {
	        name: '空调设备',
	        type: 'line',
	        smooth: true,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(24, 150, 65, 1)'
	                }, {
	                    offset: 1,
	                    color: 'rgba(0, 0, 0, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: '#49D62d'
	            }
	        },
	        data: [37.3,49.2,39.3,50.0,49.6,40.6,50.0,41.5,49.8,47.5,50.4,44.9]
	    }, {
	        name: '特种设备',
	        type: 'line',
	        smooth: true,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(169, 56, 57, 1)'
	                }, {
	                    offset: 1,
	                    color: 'rgba(0, 0, 0, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: '#D03A3B'
	            }
	        },
	        data: [34.2,21.0,37.5,22.1,23.7,38.5,31.9,19.8,29.7,37.6,32.9,19]
	    }, {
	        name: '照明设备',
	        type: 'line',
	        smooth: true,
	        lineStyle: {
	            normal: {
	                width: 1
	            }
	        },
	        areaStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: 'rgba(6, 89, 159, 1)'
	                }, {
	                    offset: 1,
	                    color: 'rgba(0, 0, 0, 0)'
	                }], false),
	                shadowColor: 'rgba(0, 0, 0, 0.1)',
	                shadowBlur: 10
	            }
	        },
	        itemStyle: {
	            normal: {
	                color: '#278ADE'
	            }
	        },
	        data: [8.2,8.0,7.5,2.1,3.7,8.5,1.9,11.8,9.7,8.6,2.9,0]
	    }]
	};
	myChart.setOption(option);
	
	$(window).resize(function() {
		myChart.resize()
	})

})