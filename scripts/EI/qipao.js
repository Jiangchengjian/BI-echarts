$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('qipao'));	
	

	var dataGZ = [
	    [1,76,3237,27],
	    [92,85,6223,71],
	    [83,78,3283,74],
	    [55,91,4223,46],
	    [56,76,5231,69],
	    [65,109,6323,87],
	    [16,73,3261,97],
	    [25,146,8321,139],
	    [27,81,3248,62],
	    [60,16,1321,188],    
	    [35,116,8321,139],
	    [78,16,3248,62],
	    [40,106,1321,188],
	    [31,118,2231,76]
	];


	var option = {
		
	    title: [ {
	        text: '楼宇类型：住院楼',
	        right: '0%',
	        top: '0%',
	        textAlign: 'center',
	        textStyle: {
	            color: '#CCD3E2',
	            fontSize:"14"
	        }
	    }],
	    grid: {
	        x: '10%',
	        x2: '10%',
	        y: '60',
	        y2: '10%'
	    },
	    tooltip: {
	        padding: 10,
	        formatter: function (obj) {
	            //自定义函数 显示提示信息
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
	        name: '能耗指数EI',
	        min: 0,
	        max: 100,
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
	        name: '单位面积能耗\n(kgce/m2)',
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
		      	color: ['#fff'],
		        textStyle: {
		            color: '#CCD3E2'
		        }
	        },
	     
	    ],
	    series: [
	        {	
	        	name: '1',
	            type: 'scatter',	            
	            markArea: {
	                silent: true,
	                data: [[{
		                    name: '超标能耗区',
		                    xAxis: '0'
		                }, {
		                    xAxis: '60'
		                }]
	                ],
	                itemStyle: {
	                	normal: {
	                		color: 'rgba(225,83,20,0.1)'
	                	}
	                },
	               	label: {
		               	normal: {
		               		show: true,
		               		offset: [0, -15],
		               		textStyle: {
		               			color: '#D3B914'
		               		}
		               	}
	               	}
	            }
	        },
	        {
	        	name: '2',
	            type: 'scatter',	            
	            markArea: {
	                silent: true,
	                data: [[{
		                    name: '合理能耗区',
		                    xAxis: '60'
		                }, {
		                    xAxis: '80'
		                }]
	                ],	                
	                itemStyle: {
	                	normal: {
	                		color: 'rgba(19,108,198,0.1)'
	                	}
	                },
	                label: {
		               	normal: {
		               		show: true,
		               		offset: [0, -15],
		               		textStyle: {
		               			color: '#13C6C6'
		               		}
		               	}
	               	}
	            },
	        },
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
		            return 20;
		        },
	            
	            markArea: {
	                silent: true,
	                data: [
	                	[{
		                    name: '合理能耗区',
		                    xAxis: '80'
		                }, {
		                    xAxis: '100'
		                }]
	                ],
	                itemStyle: {
	                	normal: {
	                		color: 'rgba(9,217,55,0.1)'
	                	}
	                },
	                label: {
		               	normal: {
		               		show: true,
		               		offset: [0, -15],
		               		textStyle: {
		               			color: '#09D937'
		               		}
		               	}
	               	}
	            },
	        },
	    ]
	};



	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})