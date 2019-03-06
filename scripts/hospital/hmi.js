
$(document).ready(function() {
	
	shuju()
	function shuju() {
//      测试
		var data={
			"value":["0.3", "0.5", "0.7", "0.5", "0.6"],
			"value1":["0.5", "0.6", "0.3", "0.9", "0.4"]
		}
		hmi(data.value,data.value1)
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/rhmi",
//			async:true,
//			success:function(data) {
//				hmi(data.value)
//			}
//		});
	}
	
	
	
	function hmi(value,value1) {
		var value=value;
		var value1=value1;
		var myChart = echarts.init(document.getElementById('hmi'));
		option = {
	
			legend: {
		        data: ['本院医院指数', '标准医院指数'],
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
		           { name: '后勤人员指数', max: 1},
		           { name: 'CMI指数', max: 1},
		           { name: 'RW单价指数', max: 1},
		           { name: '后勤资产指数', max: 1},
		           { name: '建筑容积率指数', max: 1}
		        ],
		        radius: '50%',//角度
            	center: ['45%','50%'],//中心位置
		   	},
		    series: [{
		        name: '本院医院指数',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#459cfd',
	                    borderColor: '#459cfd'
	                }
	           },
		        data : [//数据
		            {
		                value : value,
		                name : '本院指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '标准医院指数',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: 'red',
	                    borderColor: 'red'
	                }
	           },
		        data : [//数据
		            {
		                value : value1,
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
