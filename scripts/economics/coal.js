$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('coal'));	
	
	option = {
	    legend: {
	        data: ['本院', '最小值', '平均值'],
	        bottom: '15',
	        textStyle: {
	            color: '#fff'
	        },
	    },
	    color: ['#1ED2D3', '#A28B23', '#D62424'], // 调色盘颜色列表。
	    tooltip: {},
	    radar: [{
	        indicator: [{
	                text: '采购成本'
	            }, {
	                text: '人工成本'
	            }, {
	                text: '维修成本'
	            }, {
	                text: '维保成本'
	            }, {
	                text: '用能成本'
	            },	
	        ],
	        center: ['50%', '50%'],
	        radius: '50%',//角度
	        splitNumber: 4,
	        shape: 'circle',
	        name: {//字样式
		        textStyle: {
		            color: '#ccd3e2'
		        }
		    },
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
	    }],
	    series: [{
	        name: '雷达图',
	        type: 'radar',
	        data: [{
	            value:  [40, 2, 0.6, 10, 23],
	            name: '本院',
	            lineStyle: {
	                normal: {
//	                   	type: 'dashed',
	                  	width: 1
	                }
	            }
	        }, {
	            value: [60, 5, 0.30, 223, 123],
	            name: '最小值',
	            lineStyle: {
	                normal: {
//	                   	type: 'dashed',
	                  	width: 1
	                }
	            }
	
	        }, {
	            value:[100, 8, 0.40, 43, 56],
	            name: '平均值',
	            lineStyle: {
	                normal: {
//	                   	type: 'dashed',
	                  	width: 1
	                }
	            }
	        }]
	    }]
	}
	
	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})