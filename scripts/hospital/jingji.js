$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('jingji'));	
	
	
	option = {
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    grid: {
	    	top: '12%',
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
	        	show: false,
	            lineStyle: {
	                color: '#fff'
	            }
	        },
	        axisTick: {
		        show: false
		    },
	        axisLabel: {//字
	        	show: false,
		        textStyle: {
		            color: '#ccd3e2',		            
		        }
		    },
	    },
	    yAxis: {
	        type: 'category',
	        data: ['博士生导师','硕士生导师','正副教授','后勤人数','总职工数'],
	        axisLine: {
	            lineStyle: {
	                color: '#fff',
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
	            name: '本院',
	            type: 'bar',
	            barWidth: 15,
	            itemStyle: {
		            normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 1, 1, 0,
		                    [
		                    	{offset: 0, color: '#00A2EE'},
		                        {offset: 1, color: '#10E6EE'}
		                        
		                    ]
		                )
		            }
		        },
		        label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight',
	                    offset: [25,0]
	                }
	            },
	            data: [20, 40, 23, 17, 17]
	        }
	    ]
	};
	

	
	
	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})