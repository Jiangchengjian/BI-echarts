
$(document).ready(function() {
	
		var myChart = echarts.init(document.getElementById('hmi'));
		option = {
	
			legend: {
		        data: ['本院数值', '行业平均值'],
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
		           { name: '单位万元设备能耗指数', max: 1},
		           { name: '单位门急诊\n能耗指数', max: 1},
		           { name: '单位床位\n能耗指数', max: 1},
		           { name: '单位万元业务\n收入能耗指数', max: 1},
		           { name: '单位面积建筑\n能耗指数', max: 1}
		        ],
		        radius: '50%',//角度
            	center: ['50%','50%'],//中心位置
		   	},
		    series: [{
		        name: '本院数值',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#459cfd',
	                    borderColor: '#459cfd'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.3", "0.5", "0.7", "0.5", "0.6"],
		                name : '本院数值',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '行业平均值',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: 'red',
	                    borderColor: 'red'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.5", "0.6", "0.3", "0.9", "0.4"],
		                name : '行业平均值',
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
	
	
	
	
	
	
})
