$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('qipao'));	
	

	var dataGZ = [
	    [1,76,3237,27],
	    [2,85,6223,71],
	    [3,78,3283,74],
	    [5,91,4223,46],
	    [6,76,5231,69],
	    [15,109,6323,87],
	    [16,73,3261,97],
	    [25,146,8321,139],
	    [27,81,3248,62],
	    [30,16,1321,188],    
	    [35,116,8321,139],
	    [7,16,3248,62],
	    [40,106,1321,188],
	    [31,118,2231,76]
	];


	var option = {
	    title: [ {
	        text: '医院经济运行指数ROI',
	        left: '48%',
	        top: '2%',
	        textAlign: 'center',
	        textStyle: {
	            color: '#CCD3E2',
	            fontSize:"16",
	            fontWeight: 'normal'
	        }
	    },{
	        text: '气泡越大，维修次数越多',
	        left: '86%',
	        top: '10%',
	        textAlign: 'center',
	        textStyle: {
	            color: '#CCD3E2',
	            fontSize:"14"
	        }
	    }],
	    grid: {
	        x: '10%',
	        x2: '10%',
	        y: '18%',
	        y2: '10%'
	    },
	    tooltip: {
	        padding: 10,
	        formatter: function (obj) {
	            //自定义函数 显示提示信息
	            console.log(obj)
	            var value = obj.value;
	            if (obj.data.length>1) {
	            	return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
		                + obj.seriesName
		                + '</div>'
		                + 'ROI' + '：' + value[0] + '<br>'
		                + '收益率' + '：' + value[1] + '<br>'
		                + '收入' + '：' + value[2] + '<br>'
		                + '成本' + '：' + value[3] + '<br>'
	            } else{
	            	return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
		                + obj.seriesName
		                + '</div>'
		                + '平均值' + '：' + value + '<br>'
	            }
	            
	        },
	        //显示做表线        
	        axisPointer:{
	            show: true,
	            type : 'cross',
	            lineStyle: {
	                type : 'dashed',
	                width : 1
	            }
	        }
	    },
	    xAxis: {
	        type: 'value',
	        name: '医院 ROI',
	        nameTextStyle: {
	            color: '#CCD3E2',
	            fontSize: 14
	        },
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#CCD3E2'
	            }
	        }
	    },
	    yAxis: {
	        type: 'value',
	        name: '每标煤的获取成本',
	        nameLocation: 'end',
	        nameTextStyle: {
	            color: '#CCD3E2',
	            fontSize: 14
	        },
	        axisLine: {
	            lineStyle: {
	                color: '#CCD3E2'
	            }
	        },
	        splitLine: {
	            show: false
	        }
	    },
	    visualMap: [      
	        {
	        	show:false,
	        	min: 0,
		        max: 130,
		      	color: ['#189cf0','#34d65d'],
		        textStyle: {
		            color: '#CCD3E2'
		        }
	        },
	     
	    ],
	    series: [
	        {
	            name: '本院',
	            type: 'scatter',
	            itemStyle: {
				    normal: {
				        opacity: 0.8,
				    }
				},	            
	            data: dataGZ,
	            symbolSize: function (data) {
		            return Math.sqrt(data[2]) / 2;
		        },
	            markLine: {
	            	slient: true,
	            	lineStyle: {
	            		normal: {
	            			color: '#CCD3E2'
	            		}
	            	},
	                data: [
	                    {type: 'average', name: '平均值'},	
	                    { xAxis: 10 }
	                ]
	            }
	        }
	    ]
	};



	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})