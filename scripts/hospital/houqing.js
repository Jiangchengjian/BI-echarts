$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('houqing'));	
	
	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    calculable : true,
	    series : [	        
	        {
	            name:'后勤设备资产分布',
	            type:'pie',
	            hoverAnimation: false, //鼠标移入变大
	            radius : ['0%', '70%'],
	            color: ['#F19149','#556FB5','#00B7EE'],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:[
	                {value:976, name:'物资资产'},
	                {value:1092, name:'设备资产'},
	                {value:741, name:'楼宇资产'}
	            ],
	            label:{
	            	normal:{
	            		formatter: "{b} {d}%"
	            	}
	            },
	            labelLine: {
	                normal: {
	                    smooth: 0.2,
	                    length: 5,
	                    length2: 3
	                }
	            }
	        }
	    ]
	};

	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})