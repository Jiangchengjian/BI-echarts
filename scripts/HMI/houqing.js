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
	            radius : [25, 100],
	            color: ['#44BB44','#EBD03B','#ECAF47','#CE4533','#00B7EE'],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:[
	                {value:976, name:'超大型设备(1000w--)'},
	                {value:1092, name:'大型设备(50-100w)'},
	                {value:741, name:'中型设备(10-50w)'},
	                {value:529, name:'小型设备(1-10w)'},
	                {value:349, name:'一般设备(0-1w)'}
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