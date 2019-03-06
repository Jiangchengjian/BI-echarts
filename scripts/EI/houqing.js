$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('houqing'));	
	
	
	
	
	option = {
	    title: {
	        text: '能源分类',
	        x: 'center',
	        y: 'center',
	        textStyle: {
	            fontWeight: 'normal',
	            fontSize: '100%',
	            color: '#ccd3e2'
	        }
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: function(params, ticket, callback) {
	            var res = params.seriesName;
	            res += '<br/>' + params.name + ' : ' + params.percent + '%';
	            return res;
	        }
	    },
	    
	    series: [{
	        name: '本院',
	        type: 'pie',
	        color: ['#E28118','#136CC8','#03B7B9'],
	        radius: ['50%', '80%'],
	        center: ['50%','50%'],//中心位置
	        label: {
	            normal: {
	                position: 'inner',
	                textStyle: {
	                    color: '#ccd3e2',
	                    fontSize: 14
	                }
	            }
	        },
	        labelLine: {
	            normal: {
	                show: true
	            }
	        },
	        data: [{
	            value: 11,
	            name: '水'
	        }, {
	            value: 22,
	            name: '电'
	        }, {
	            value: 33,
	            name: '气'
	        }]
	    }]
	};

	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})