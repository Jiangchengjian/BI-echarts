$(document).ready(function() {

	
	var myChart = echarts.init(document.getElementById('louyus'));
		
	option = {

	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'line',
//	            show: true
	        }
	    }, 
	    legend: {
	        data:['住院楼','门急诊楼','科研楼','行政楼','医技楼','综合楼','传染病楼','其他'],
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
	    xAxis:  {
	        data: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
	        type: 'category',
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
		        },
//		        rotate: '45',
		        interval: '0',
		        margin: '15',
		        formatter:function(value) {
		        	//斜着两行
		        	var len=value.length
		        	if (len>4) {
		        		return value.substring(0,(Math.floor(len/2)+2))+"\n"+value.substring(len-Math.floor(len/2)+1)
		        	} else{
		        		return value
		        	}		        	
		        }
		    },
	    },
	    yAxis: {
	    	name: '单 位 面 积 能 耗 (kgce/m2)',
	    	nameLocation: 'middle',
	    	nameRotate: '90',
	    	nameGap: '40',
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
	            name:'住院楼',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#6A51FF'},
		                        {offset: 0.9, color: '#004C87'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[90, 95, 91, 88, 87, 89, 96, 90, 96, 83, 90, 95, 91, 88, 87, 89, 96, 90, 96, 83, 96, 83, 90, 95],	           
	        },
	        {
	            name:'门急诊楼',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#67FFC8'},
		                        {offset: 0.9, color: '#25B725'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[83.41, 76.16, 83.69, 71.13, 83.01, 86.07, 83.55, 83.68, 84.95, 82.05, 83.41, 86.16, 83.69, 81.13, 83.01, 86.07, 83.55, 83.68, 84.95, 82.05, 86.16, 83.69, 81.13, 83.01],	            
	        },
	        {
	            name:'科研楼',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#C73070'},
		                        {offset: 0.9, color: '#004C87'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[70, 85, 61, 88, 87, 89, 66, 60, 66, 83, 60, 75, 71, 78, 87, 79, 66, 76, 76, 83, 66, 83, 70, 95],	           
	        },
	        {
	            name:'行政楼',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#7184F3'},
		                        {offset: 0.9, color: '#1852B1'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[63.41, 36.16, 63.69, 61.13, 73.01, 76.07, 73.55, 63.68, 64.95, 62.05, 73.41, 76.16, 63.69, 71.13, 63.01, 66.07, 73.55, 63.68, 74.95, 52.05, 66.16, 73.69, 71.13, 53.01],	            
	        },
	        {
	            name:'医技楼',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#00DFB2'},
		                        {offset: 0.9, color: '#08BFCB'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[50, 55, 51, 68, 57, 59, 66, 60, 66, 63, 60, 67, 61, 68, 57, 59, 66, 60, 66, 63, 66, 65, 70, 75],	           
	        },
	        {
	            name:'综合楼',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#F265BE'},
		                        {offset: 0.9, color: '#E4007F'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[43.41, 46.16, 53.69, 41.13, 53.01, 46.07, 53.55, 53.68, 44.95, 52.05, 43.41, 36.16, 53.69, 51.13, 53.01, 56.07, 43.55, 43.68, 54.95, 52.05, 36.16, 53.69, 41.13, 53.01],	            
	        },
	        {
	            name:'传染病楼',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#8DDD62'},
		                        {offset: 0.9, color: '#11CD61'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[20, 35, 31, 48, 37, 49, 36, 40, 36, 43, 30, 45, 31, 48, 37, 39, 36, 30, 36, 33, 36, 43, 40, 45],	           
	        },
	        {
	            name:'其他',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#E99B48'},
		                        {offset: 0.9, color: '#DB5F22'}
		                        
		                    ]
		                )
		            }
		        },
	            data:[23.41, 16.16, 23.69, 11.13, 13.01, 26.07, 13.55, 23.68, 24.95, 12.05, 23.41, 16.16, 23.69, 21.13, 13.01, 26.07, 23.55, 13.68, 14.95, 22.05, 16.16, 23.69, 21.13, 13.01],	            
	        }
	    ]
	};
	
	
	myChart.setOption(option);
	
	
	$(window).resize(function() {
		myChart.resize()
	})

})
