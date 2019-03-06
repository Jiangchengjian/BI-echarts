$(document).ready(function() {
	
	var myChart = echarts.init(document.getElementById('equipment'));	


	option = {
	    angleAxis: {
	        type: 'category',
	        axisTick: {
	        	show: false
	        },
	        axisLine: {//线
	        	show: true,
	            lineStyle: {
	                color: '#272938'
	            }
	        },
		    axisLabel: {//字
	        	show: true,
		        textStyle: {
		            color: '#ccd3e2',		            
		        }
		    },		    
	        data: ['1年内', '1-3年', '3-5年', '5-10年', '10年以上'],
	        z: 10
	    },
	    radiusAxis: {
	    	axisLine: {//线
	        	show: true,
	            lineStyle: {
	                color: '#ccd3e2'
	            }
	        },
	    	axisLabel: {//字
	        	show: true,
		        textStyle: {
		            color: '#ccd3e2',		            
		        }
		    },
		    splitLine: {
                show: true,
                lineStyle: {
                    color: '#272938',
                    width: 0.5,
                    type: 'dotted',
//                  opacity: 0.5
                }
           	},
		    z: 10
	    },
	    polar: {
	    	center: ['50%', '50%'],
       	 	radius: '60%',
	    },
	    series: [{
	        type: 'bar',
	        itemStyle: {
		        normal: {
		        	color: '#bb2631'
		        } 
		    },
	        data: [1, 2, 3, 4, 5],
	        coordinateSystem: 'polar',
	        name: '报废',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        itemStyle: {
		        normal: {
		        	color: '#bca731'
		        } 
		    },
	        data: [2, 4, 6, 8, 2],
	        coordinateSystem: 'polar',
	        name: '封存',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        itemStyle: {
		        normal: {
		        	color: '#bb6621'
		        } 
		    },
	        data: [1, 6, 8, 4, 3],
	        coordinateSystem: 'polar',
	        name: '停用',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        itemStyle: {
		        normal: {
		        	color: '#445993'
		        } 
		    },
	        data: [5, 2, 4, 4, 3],
	        coordinateSystem: 'polar',
	        name: '未启用',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        itemStyle: {
		        normal: {
		        	color: '#0b83b2'
		        } 
		    },
	        data: [1, 7, 2, 4, 6],
	        coordinateSystem: 'polar',
	        name: '在用',
	        stack: 'a'
	    }],
	    legend: {
	        show: true,
	        data: ['在用', '未启用', '停用', '封存', '报废'],
	        textStyle: {
		        color: '#ccd3e2'
		    },
		    orient: 'vertical',//纵向分布  若横向去掉这条属性
		    align: 'left',						
		    right: 0,
		    bottom: 20
	    }
	};



	myChart.setOption(option);
		
	$(window).resize(function() {
		myChart.resize()
	})

})