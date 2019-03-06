$(document).ready(function() {
	shuju()
	function shuju() {
//		测试
		var data={
		"category":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
		"lineData":["70","65","71","58","67","59","66","70","56","63","67","59"]
	}
		economic(data.category,data.lineData)
		
//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/economic",
//			async:true,
//			success:function(data) {
//				economic(data.category,data.lineData)
//			}
//		});
	}
	

function economic (category,lineData) {
	var myChart = echarts.init(document.getElementById('economic'));
	
	var category=category;
	var lineData=lineData
//	var category = ['曙光东院','市一院','五官科医院','质子医院','六院东院','肿瘤医院','金山医院','复旦儿科','国妇婴','华山北院'];
//	var lineData = ['90','95','91','88','87','89','96','90','96','83'];
	
	option = {

	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'line',
//	            show: true
	        }
	    }, 
	    grid: {//位置
		    left: '10%',
		    right: '5%',
		    top: '10%',
		    bottom: '15%'
		},
	    xAxis:  {
	        data: category,
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
		        interval: '0'	        
		    },
	    },
	    yAxis: {
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
	            name:'投入成本',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: '#3bc1fd'
		            }
		        },
		        areaStyle: {
		        	normal: {
		        		color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: 'rgb(0, 156, 255)'},
		                        {offset: 0.8, color: 'rgb(0, 0, 0)'}
		                        
		                    ]
		                )
		        	}
		        },
	            data:lineData,	           
	        }
	    ]
	};
	
	
	myChart.setOption(option);
	
	
	$(window).resize(function() {
		myChart.resize()
	})
}
})
