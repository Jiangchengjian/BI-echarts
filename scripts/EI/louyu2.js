$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('louyu2'));	
	
	option = {
	    tooltip: {
	        trigger: 'axis',	        
	    },
	    legend: {
	        data:['当前项','同比(前一月)','环比(前一年)','行业平均能耗'],
	        top: '8%',
	        textStyle: {
		        color: '#ccd3e2'
		    },
		    orient: 'vertical',//纵向分布  若横向去掉这条属性
			align: 'left',						
			right: 10,
			top: 70
	    },
	    grid: {//位置
	    	top: '0%',
		    left: '5%',
		    right: '10%',
		    top: '18%',
		    bottom: '15%'
		},
	    xAxis: [
	        {
	            type: 'category',
	            name: '时间(h)',
	            data: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
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
	            name: 'kgce/m2',
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
			            color: '#ccd3e2'	            
			        }
		        }
	        }
	    ],
	    series: [	        
	        {
	            name:'当前项',
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
	            data:[26, 59, 90, 24, 87, 77, 76, 82, 47, 18, 60, 23, 26, 59, 90, 24, 87, 77, 76, 82, 47, 18, 60, 76]
	        },
	        {
	            name:'同比(前一月)',
	            type:'bar',
	            barWidth: 8,
	            itemStyle: {
	            	normal: {
	            		barBorderRadius: [5, 5, 0, 0],
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#51BEFD'},
		                        {offset: 1, color: '#009BFE'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[20, 49, 70, 22, 5.6, 77, 76, 62, 36, 20, 64, 33, 20, 49, 70, 22, 5.6, 77, 76, 62, 36, 20, 64, 33]
	        },
	        {
	            name:'环比(前一年)',
	            type:'bar',
	            barWidth: 8,
	            itemStyle: {
	            	normal: {
	            		barBorderRadius: [5, 5, 0, 0],
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#59BCEB'},
		                        {offset: 1, color: '#00A584'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[26, 59, 90, 24, 87, 77, 76, 82, 47, 18, 60, 23, 26, 59, 90, 24, 87, 77, 76, 82, 47, 18, 60, 23]
	        },	        
	        {
	            name:'行业平均能耗',
	            type:'line',
	            itemStyle: {
	            	normal: {
		                color: '#EB6100'
		            }
		        },
	            data:[20, 22, 33, 45, 63, 12, 23, 34, 30, 65, 20, 62, 20, 22, 33, 45, 63, 12, 23, 34, 30, 65, 20, 62]
	        }
	    ]
	};

	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})