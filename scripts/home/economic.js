$(document).ready(function() {
	shuju()
	function shuju() {
//		测试
		var data={
		"category":["曙光东院","市一院","五官科医院","质子医院","六院东院","肿瘤医院","金山医院","复旦儿科","国妇婴","华山北院"],
		"lineData":["90","95","91","88","87","89","96","90","96","83"],
		"barData":["23.41","36.16","23.69","41.13","53.01","26.07","43.55","33.68","34.95","52.05"]
	}
		economic(data.category,data.lineData,data.barData)
		
//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/economic",
//			async:true,
//			success:function(data) {
//				economic(data.category,data.lineData,data.barData)
//			}
//		});
	}
	

function economic (category,lineData,barData) {
	var myChart = echarts.init(document.getElementById('economic'));
	
	var category=category;
	var lineData=lineData
	var barData=barData
//	var category = ['曙光东院','市一院','五官科医院','质子医院','六院东院','肿瘤医院','金山医院','复旦儿科','国妇婴','华山北院'];
//	var lineData = ['90','95','91','88','87','89','96','90','96','83'];
//	var barData = ['23.41','36.16','23.69','41.13','53.01','26.07','43.55','33.68','34.95','52.05'];
	
	option = {

	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'line',
//	            show: true
	        }
	    }, 
	    grid: {//位置
		    left: '8%',
		    right: '5%',
		    top: '10%',
		    bottom: '25%'
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
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#7069EC'},
		                        {offset: 0.9, color: '#28229C'}
		                        
		                    ]
		                )
		            }
		        },
	            data:lineData,	           
	        },
	        {
	            name:'业务成本',
	            type:'line',
	            symbolSize: 6,//显示大小
	            itemStyle: {
	            	normal: {
		                color: new echarts.graphic.LinearGradient(
		                    0, 0, 0, 1,
		                    [
		                    	{offset: 0, color: '#66AAF6'},
		                        {offset: 0.9, color: '#0B6EDC'}
		                        
		                    ]
		                )
		            }
		        },
	            data:barData,	            
	        }
	    ]
	};
	
	
	myChart.setOption(option);
	
	
	$(window).resize(function() {
		myChart.resize()
	})
}
})
