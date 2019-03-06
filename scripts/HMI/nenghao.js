
$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('nenghao'));	

	var option = {
	    series: [{
	        type: 'liquidFill',
	        animation: true,
	        waveAnimation: true,
	        data: [0.76, 0.76, 0.76],
	        color: ['#2ec3c6', '#2ab2df', '#269eb6', '#2396b1'],
	        center: ['50%', '50%'],
	        waveLength: '60%',
	        amplitude: 8,
	        radius: '70%',
	        label: {
	            normal: {
	                formatter: function() {
	                    return '先进';
	                },
	                textStyle: {
	                	fontStyle: 'normal',
	                    fontSize: '150%',
	                    color: '#ccd3e2'
	                },
	                position: ['50%', '50%']
	            }
	        },
	        outline: {
	            itemStyle: {
	                borderColor: '#ccd3e2',
	                borderWidth: 2
	            },
	            borderDistance: 0
	        },
	        backgroundStyle: {
	           	color: '#000'
	        },
	        itemStyle: {
	            normal: {
	                backgroundColor: '#fff'
	            }
	        }
	    }]
	};


	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})