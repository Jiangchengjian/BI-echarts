$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('jingji'));	
	
	
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        bottom: '10',
	        textStyle: {
		       	color: '#ccd3e2'
		    },
	        data:['气','电','水'],
	    },
	    series: [
	        
	        {
	            name:'本院',
	            type:'pie',
	            radius: ['40%', '55%'],
				color: ['#E28118','#136CC8','#03B7B9'],
				label:{
	            	normal:{
	            		formatter: "{b} {d}%"
	            	}
	            },
	            data:[
	            	{value:234, name:'水'},
	                {value:335, name:'电'},
	                {value:310, name:'气'},
	                
	            ]
	        }
	    ]
	};
	

	
	
	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})