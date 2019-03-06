$(document).ready(function() {
	
	
	shuju()
	function shuju() {
//		测试
		var data={
		"hospital":["中山医院","中山医院","中山医院","中山医院","中山医院","中山医院","中山医院","中山医院","中山医院","中山医院"],
		"values":[
			{"name":"医院指数HI","value":["320", "302", "301", "334", "390", "330", "320", "302", "301", "301"]},
			{"name":"维修指数CRI","value":["320", "302", "301", "334", "390", "330", "320", "302", "301", "301"]},
			{"name":"安全指数SI","value":["320", "302", "301", "334", "390", "330", "320", "302", "301", "301"]},
			{"name":"经济指数RQI","value":["320", "302", "301", "334", "390", "330", "320", "302", "301", "301"]},
			{"name":"能耗指数EI","value":["320", "302", "301", "334", "390", "330", "320", "302", "301", "301"]},
			{"name":"综合管理指数HMI","value":["320", "302", "301", "334", "390", "330", "320", "302", "301", "301"]}
		]	
	}
		paihang(data)

//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/paihang",
//			async:true,
//			success:function(data) {
//				paihang(data)
//			}
//		});
	}
	
	
	
	function paihang(data) {
		var hospital=data.hospital;
		var names=[]
		var value1=[]
		var value2=[]
		var value3=[]
		var value4=[]
		var value5=[]
		var value6=[]
		$(data.values).each(function(i,e) {
			if (e.name=='医院指数HI') {
				value1=e.value
			}
			if (e.name=='维修指数CRI') {
				value2=e.value
			}
			if (e.name=='安全指数SI') {
				value3=e.value
			}
			if (e.name=='经济指数RQI') {
				value4=e.value
			}
			if (e.name=='能耗指数EI') {
				value5=e.value
			}
			if (e.name=='综合管理指数HMI') {
				value6=e.value
			}
			
		})
		
		
		var myChart = echarts.init(document.getElementById('paihang'));
		
		option = {		
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data: ['医院指数HI', '维修指数CRI', '安全指数SI', '经济指数RQI', '能耗指数EI', '综合管理指数HMI'],
		        top: 20,
		        textStyle: {
		        	color: '#ccd3e2'
		        }
		    },
		    grid: {
		        left: '3%',
		        right: '6%',
		        bottom: '5%',
		        containLabel: true
		    },
		    xAxis:  {
		        type: 'value',
		        position: 'top',
//		        boundaryGap: ['2%', '2%'],
		        axisLabel: {
		            textStyle: {
		                color: '#ccd3e2'
		            }
		        },
		        axisLine: {//线
		            lineStyle: {
		                color: '#ccd3e2'
		            }
		        },
		        axisTick: {
			        show: false
			    },
			    splitLine: {
		        	show: true,	        	
		        	lineStyle: {
				        // 使用深浅的间隔色
				        color: ['#272938'],
				        width: 1,
				        type: 'solid'
				    }
		        }
		    },
		    yAxis: {
		        type: 'category',
		        inverse: true,
		        data: hospital,
		        axisLabel: {
		            textStyle: {
		                color: '#ccd3e2'
		            }
		        },
		        axisTick: {
			        show: false
			    },
		        axisLine: {
		            show: false
		        }
		    },
		    series: [
		        {
		            name: '医院指数HI',
		            type: 'bar',
		            stack: '总量',
		            barWidth: 20,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            itemStyle: {
		            	normal: {color: '#89D1FF'}
		            },
		            data: value1
		        },
		        {
		            name: '维修指数CRI',
		            type: 'bar',
		            stack: '总量',
		            barWidth: 20,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            itemStyle: {
		            	normal: {color: '#6EB2FF'}
		            },
		            data: value2
		        },
		        {
		            name: '安全指数SI',
		            type: 'bar',
		            stack: '总量',
		            barWidth: 20,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            itemStyle: {
		            	normal: {color: '#6E90FF'}
		            },
		            data: value3
		        },
		        {
		            name: '经济指数RQI',
		            type: 'bar',
		            stack: '总量',
		            barWidth: 20,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            itemStyle: {
		            	normal: {color: '#527FE6'}
		            },
		            data: value4
		        },
		        {
		            name: '能耗指数EI',
		            type: 'bar',
		            stack: '总量',
		            barWidth: 20,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            itemStyle: {
		            	normal: {color: '#3A60C4'}
		            },
		            data: value5
		        },
		        {
		            name: '综合管理指数HMI',
		            type: 'bar',
		            stack: '总量',
		            barWidth: 20,
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            itemStyle: {
		            	normal: {color: '#00479D'}
		            },
		            data: value6
		        }
		    ]
		};
		
		
		myChart.setOption(option);
		$(window).resize(function() {
			myChart.resize()
		})
	}
	
	
	
	

})