$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('houqing1'));	
	
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
	            radius : ['15%', '70%'],
	            color: ['#44BB44','#EBD03B','#ECAF47','#CE4533','#00B7EE'],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:[
	                {value:100, name:'超大型设备(1000w--)'},
	                {value:231, name:'大型设备(50-100w)'},
	                {value:741, name:'中型设备(10-50w)'},
	                {value:976, name:'小型设备(1-10w)'},
	                {value:1349, name:'一般设备(0-1w)'}
	            ],
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