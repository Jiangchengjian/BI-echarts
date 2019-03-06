$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('guolu'));	
	
	option = {
	    tooltip: {
	        trigger: 'axis',	        
	    },
	    legend: {
	        data:['1#真空锅炉','2#真空锅炉','行业平均效率'],
	        top: '8%',
	        textStyle: {
		        color: '#ccd3e2'
		    }
	    },
	    grid: {//位置
		    left: '5%',
		    right: '5%',
		    top: '18%',
		    bottom: '15%'
		},
	    xAxis: [
	        {
	            type: 'category',
	            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	            axisPointer: {
	                type: 'shadow'
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
			        },
			    }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '运行效率(%)',
	            min: 0,
	            max: 100,
	            interval: 20,
	            splitLine: {
	        		show: false,	        			        	
		        },
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
		        		formatter: '{value} %',
			            color: '#ccd3e2'	            
			        }
		        }
	        }
	    ],
	    series: [
	        {
	            name:'1#真空锅炉',
	            type:'bar',
	            barWidth: 8,
	            itemStyle: {
	            	normal: {
	            		barBorderRadius: [5, 5, 0, 0],
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#51BEFD'},
		                        {offset: 1, color: '#119DEE'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[20, 49, 70, 22, 5.6, 77, 76, 62, 36, 20, 64, 33]
	        },
	        {
	            name:'2#真空锅炉',
	            type:'bar',
	            barWidth: 8,
	            itemStyle: {
	            	normal: {
	            		barBorderRadius: [5, 5, 0, 0],
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#1477F1'},
		                        {offset: 1, color: '#3012E8'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[26, 59, 90, 24, 87, 77, 76, 82, 47, 18, 60, 23]
	        },
	        {
	            name:'行业平均效率',
	            type:'line',
	            itemStyle: {
	            	normal: {
		                color: '#FFD200'
		            }
		        },
	            data:[20, 22, 33, 45, 63, 12, 23, 34, 30, 65, 20, 62]
	        }
	    ]
	};

	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})