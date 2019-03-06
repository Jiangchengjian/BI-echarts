
$(document).ready(function() {
	
	
	hmi()
	function hmi() {
		var myChart = echarts.init(document.getElementById('hmi'));
		option = {
	
			legend: {
		        data: ['本院指数', '平均指数'],
		        icon: 'pin',
		        bottom: 20,
		        textStyle: {
		        	color: '#ccd3e2'
		        }
		    },
		    tooltip: {},		    
		    radar: {
		        splitArea: {//区域样式
		            show: false
		        },
		        splitLine: {//蜘蛛网样式
		            lineStyle: {
		                color: ['#3d3d3d', '#3d3d3d'],
		                type: 'solid'
		            }
		        },	
		        axisLine: {//连接线样式
	              	lineStyle: {
	                	color: '#3d3d3d',
	                 	width: 1,
	               	  	type: 'doted'
	              	},	              	
	          	},
	          	name: {//字样式
		            textStyle: {
		                color: '#ccd3e2'
		            }
		        },
		        nameGap: '5',//字雨蜘蛛网间距
		        splitNumber: 2,//间隔
		        indicator: [
		           { name: '每标煤的收益率指标', max: 1},
		           { name: '每标煤的业\n务收入指标', max: 1},
		           { name: '每标煤的获\n取成本指标', max: 1}
		        ],
		        radius: '60%',//角度
            	center: ['50%','50%'],//中心位置
		   	},
		    series: [{
		        name: '本院指数',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#459cfd',
	                    borderColor: '#459cfd'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.3", "0.5", "0.7"],
		                name : '本院指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '平均指数',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: 'red',
	                    borderColor: 'red'
	                }
	           	},
		        data : [//数据
		            {
		                value : ["0.5", "0.6", "0.3"],
		                name : '平均指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    }]
		};
		
		myChart.setOption(option);
	
	
		$(window).resize(function() {
			myChart.resize()
		})
	}
	
	
	
	
	
})
