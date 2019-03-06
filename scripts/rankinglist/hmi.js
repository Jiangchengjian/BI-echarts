
$(document).ready(function() {
	
	shuju()
	function shuju() {
//      测试
		var data={
			"value":["0.3", "0.5", "0.7", "0.5", "0.6"]
		}
		hmi(data.value)
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/rhmi",
//			async:true,
//			success:function(data) {
//				hmi(data.value)
//			}
//		});
	}
	
	
	
	function hmi(value) {
		var value=value;
		var myChart = echarts.init(document.getElementById('hmi'));
		option = {
		    title: {
		        text: 'HMI计算权重',
		        textStyle: {
		        	color: 'white',
		        	fontWeight: 'normal',
		        	fontSize: '16'
		        },
		        left: 'center',
		        top: '2%'
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
		           { name: '安全指数', max: 1},
		           { name: '医院指数', max: 1},
		           { name: '维修指数', max: 1},
		           { name: '能耗指数', max: 1},
		           { name: '经济指数', max: 1}
		        ],
		        radius: '60%',//角度
            	center: ['50%','60%'],//中心位置
		   	},
		    series: [{
		        name: 'HMI计算权重',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#459cfd',
	                    borderColor: '#459cfd'
	                }
	            },
	            label: {//数据文字
	                normal: {
	                    show: true,
	                    position: 'top',
	                    textStyle: {
	                    	color: '#fff'
	                    },
	                    formatter: function(params) {
//	                        console.log(params);
	                    }
	                }
	            },
		        data : [//数据
		            {
		                value : value,
		                name : 'HMI计算权重',
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
