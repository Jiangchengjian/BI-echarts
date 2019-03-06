$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('jingji'));	
	
	
	option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['本院能耗', '行业能耗'],
	        top: 20,
	        textStyle: {
		        color: '#ccd3e2'
		    }
	    },
	    grid: {
	        left: '3%',
	        right: '8%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        splitLine: {
	        	show: true,	        	
	        	lineStyle: {
			        // 使用深浅的间隔色
			        color: ['#272938'],
			        width: 1,
			        type: 'dotted'
			    }
	        },
	        axisLine: {//线
	            lineStyle: {
	                color: '#fff'
	            }
	        },
	        axisTick: {
		        show: false
		    },
	        axisLabel: {//字
		        textStyle: {
		            color: '#ccd3e2',		            
		        }
		    },
	    },
	    yAxis: {
	        type: 'category',
	        data: ['采购成本','人工成本','维保成本','维修成本','其他成本'],
	        axisLine: {
	            lineStyle: {
	                color: '#fff'
	            }
	        },
	        axisTick: {
		        show: false
		    },
	        axisLabel: {
	        	textStyle: {
		            color: '#ccd3e2',		            
		        }
	        }
	    },
	    series: [
	        {
	            name: '本院能耗',
	            type: 'bar',
	            barWidth: 4,
	            barGap: '150%',
	            itemStyle: {
		            normal: {
		            	barBorderRadius: [0, 5, 5, 0],
		                color: new echarts.graphic.LinearGradient(
		                    0, 1, 1, 0,
		                    [
		                    	{offset: 0, color: '#00A2EE'},
		                        {offset: 1, color: '#10E6EE'}
		                        
		                    ]
		                )
		            }
		        },
	            data: [20, 38, 23, 17, 17]
	        },
	        {
	            name: '行业能耗',
	            type: 'bar',
	            barWidth: 4,
	            itemStyle: {
		            normal: {
		            	barBorderRadius: [0, 5, 5, 0],
		                color: new echarts.graphic.LinearGradient(
		                    0, 1, 1, 0,
		                    [
		                    	{offset: 0, color: '#FF6E02'},
		                        {offset: 1, color: '#DEDE02'}
		                        
		                    ]
		                )
		            }
		        },
	            data: [13, 33, 10, 24, 14]
	        }
	    ]
	};
	

	
	
	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})