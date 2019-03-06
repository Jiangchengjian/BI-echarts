$(document).ready(function() {

	var myChart = echarts.init(document.getElementById('economic'));
	
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
	            radius : ['15%', '50%'],
	            color: ['#44BB44','#EBD03B','#ECAF47','#CE4533','#00B7EE'],
	            center : ['50%', '50%'],
	            roseType : 'area',
	            data:[
	                {value:500, name:'照明设备'},
	                {value:431, name:'空调设备'},
	                {value:341, name:'动力设备'},
	                {value:176, name:'特种设备'}
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
