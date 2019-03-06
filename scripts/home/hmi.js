
$(document).ready(function() {	
	
shuju()	
function shuju() {
//	测试
	var data={
		"category":["曙光东院","市一院","五官科医院","质子医院","六院东院","肿瘤医院","金山医院","复旦儿科","国妇婴","华山北院","昆山一院","妇产科杨浦医院","共卫中心"],
		"lineData":["90","95","91","88","87","89","96","90","96","83","86","81","93"],
		"barData":["83.41","86.16","83.69","81.13","83.01","81.29","76.54","78.08","76.07","73.55","73.68","74.95","72.05"]
	}
	hmi(data.category,data.lineData,data.barData)
	
	
	
//	接口
//	$.ajax({
//		type:"get",
//		url:"http://localhost:3000/hmi",
//		async:true,
//		success:function(data) {
//			hmi(data.category,data.lineData,data.barData)
//		}
//	});
	
}
	

function hmi(category,lineData,barData) {
	
	var myChart = echarts.init(document.getElementById('hmi'));
	var category=category;
	var lineData=lineData
	var barData=barData
	// Generate data
//	var category = ['曙光东院','市一院','五官科医院','质子医院','六院东院','肿瘤医院','金山医院','复旦儿科','国妇婴','华山北院','昆山一院','妇产科杨浦医院','共卫中心'];
//	var lineData = ['90','95','91','88','87','89','96','90','96','83','86','81','93'];
//	var barData = ['83.41','86.16','83.69','81.13','83.01','81.29','76.54','78.08','76.07','73.55','73.68','74.95','72.05'];
		
	
	// option
	option = {	
//		title: {
//	        text: '后勤管理综合指数(HMI)实际、预计分析',
//	        textStyle: {
//	        	color: 'white',
//	        	fontWeight: 'normal'
//	        },
//	        left: 'center'
//	    },
	    tooltip: {//移入效果
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow',
	            label: {
	                show: true,
	                backgroundColor: '#333'
	            }
	        },
	        formatter:function(params) {
//	        	console.log(params)
	        	var lis=''
	        	for (var i = 0; i < params.length; i++) {
	        		var _color = params[i].color;
	        		_color = typeof(_color) == "object"?_color["colorStops"][0].color:_color;
	        		if (params[i].seriesName=="line") {
	        			lis+="<li>"+params[i].name+"</li>"
	        				+"<li>"+"<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+_color+";'></span>"+params[i].seriesName+":"+params[i].value+"</li>"
	        		}else if (params[i].seriesName=="bar") {
	        			lis+="<li>"+"<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+_color+";'></span>"+params[i].seriesName+":"+params[i].value+"</li>"
	        		}
	        	}
	        	return lis;
	        }
	    },
	    xAxis: {//X轴
	        data: category,
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
		            fontWeight: 'lighter'
		        },		        
		        rotate: '45',
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
		    }
	    },
	    yAxis: {//Y轴
	        splitLine: {show: false},
	        axisTick: {
		        show: false
		    },
	        axisLine: {
	            lineStyle: {
	                color: '#fff'
	            }
	        },
	        axisLabel: {
	        	textStyle: {
		            color: '#ccd3e2',		            
		        }
	        }
	    },
	    series: [{//效果
	        name: 'line',
	        type: 'line',
	        smooth: true,//是否平滑曲线显示
	        showAllSymbol: true,//是否全部主轴显示
	        symbol: 'emptyCircle',//显示样子
	        symbolSize: 10,//显示大小
	        itemStyle: {
	            normal: {
	                color: 'red'
	            }
	        },
	        data: lineData
	    }, {
	        name: 'bar',
	        type: 'bar',
	        barWidth: 8,
	        itemStyle: {
	            normal: {
	                barBorderRadius: [5, 5, 0, 0],
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1,
	                    [
	                    	{offset: 0, color: '#10E6EE'},
	                        {offset: 1, color: '#00A2EE'}
	                        
	                    ]
	                )
	            }
	        },
	        data: barData
	    }, {
	        name: 'lines',
	        type: 'bar',
	        barGap: '-100%',
	        barWidth: 8,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(
	                    0, 0, 0, 1,
	                    [
	                    	{offset: 0, color: '#1477F1'},
	                        {offset: 0.9, color: '#3012E8'}
	                        
	                    ]
	                )
	            }
	        },
	        z: -12,
	        data: lineData
	    }, {
	        name: 'dotted',
	        type: 'pictorialBar',
	        symbol: 'rect',
	        itemStyle: {
	            normal: {
	                color: '#000'
	            }
	        },
	        symbolRepeat: true,
	        symbolSize: [10, 4],
	        symbolMargin: 1,
	        z: -10,
	        data: lineData
	    }]
	};
	
	myChart.setOption(option);
	
	
	$(window).resize(function() {
		myChart.resize()
	})
}
})
