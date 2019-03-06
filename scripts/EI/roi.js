
$(document).ready(function() {
	
	hmi()

	function hmi() {
		var myChart = echarts.init(document.getElementById('roi'));
		option = {
			legend: {
		        data: ['市综合', '市专科', '区属二甲以上', '区属二乙', '区属专科', '其他'],
		        icon: 'pin',
		        bottom: 20,
		        textStyle: {
		        	color: '#ccd3e2'
		        },
		        orient: 'vertical',//纵向分布  若横向去掉这条属性
			    align: 'left',						
			    right: 0,
			    bottom: 20
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
		        nameGap: '8',//字雨蜘蛛网间距
		        splitNumber: 2,//间隔
		        indicator: [
		           { name: '单位万元设备能耗指数', max: 1},
		           { name: '单位门急诊\n能耗指数', max: 1},
		           { name: '单位床位\n能耗指数', max: 1},
		           { name: '单位万元业务\n收入能耗指数', max: 1},
		           { name: '单位面积建\n筑能耗指数', max: 1}
		        ],
		        radius: '70%',//角度
            	center: ['40%','60%'],//中心位置
		   	},
		    series: [{
		        name: '市综合',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#06E4FA',
	                    borderColor: '#06E4FA'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.3", "0.5", "0.7", "0.5", "0.7"],
		                name : '本院指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '市专科',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#1DE818',
	                    borderColor: '#1DE818'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.4", "0.6", "0.2", "0.6", "0.2"],
		                name : '平均指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '区属二甲以上',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#E6541D',
	                    borderColor: '#E6541D'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.8", "0.9", "0.7", "0.6", "0.2"],
		                name : '平均指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '区属二乙',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#00DBFF',
	                    borderColor: '#00DBFF'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.3", "0.8", "0.4", "0.6", "0.2"],
		                name : '平均指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '区属专科',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#2473E3',
	                    borderColor: '#2473E3'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.5", "0.2", "0.5", "0.6", "0.2"],
		                name : '平均指数',
		                lineStyle: {
		                	normal: {
		                		width: 1
		                	}
		                }
		            }
		        ]
		    },{
		        name: '其他',
		        type: 'radar',
		        itemStyle: {//数据线颜色
	                normal: {
	                    color: '#DC1E74',
	                    borderColor: '#DC1E74'
	                }
	           },
		        data : [//数据
		            {
		                value : ["0.3", "0.6", "0.7", "0.6", "0.2"],
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
