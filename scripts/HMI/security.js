$(document).ready(function() {

shuju()
function shuju() {
//	测试
	var data={
		"value":"80"
	}
	security(data.value);
	$(".shuju_j .pers").html(data.percent)
	
//	接口
//	$.ajax({
//		type:"get",
//		url:"http://localhost:3000/security",
//		async:true,
//		success:function(data) {
//			security(data.value);
//			$(".shuju_j .num").html(data.hospital)
//			$(".shuju_j .pers").html(data.percent)
//		}
//	});
}



function security(value) {
	var myChart = echarts.init(document.getElementById('security'));
	
	var gauge_value = value;   //幸运值取代码置于值于此处
	option = {
	   
	    tooltip: {
	        show: true,
	        formatter: "{b}：{c}",
	        backgroundColor: '#F7F9FB',
	        textStyle: {
	            color: 'black'
	        }
	    },
	    series: [{
	        name: '安全状态',
	        type: 'gauge',
	        splitNumber: 10,     //刻度数量
	        min: 0,
	        max: 100,
	        radius: '75%',      //图表尺寸
	        axisLine: {
	            show: true,
	            lineStyle: {
	                width: 2,
	                shadowBlur: 0,
	                color: [
	                    [0.4, '#FF0000'],
	                    [0.75, '#FFFF00'],
	                    [1, '#36FF00']
	                ]
	            }
	        },
	        axisTick: {
	            show: true,
	            lineStyle: {
	                color: "#C7FBFC",
	                width: 1
	            },
	            length: '-8%',
	            splitNumber: 2
	        },
	        splitLine: {
	            show: true,
	            length: '-5%',
	            lineStyle: {
	                color:'#C7FBFC'
	            }
	        },
	        axisLabel: {
	            distance: '-15',
	            textStyle: {
//	                color: "#C7FBFC",
	                fontSize: "12",
	            },
	            formatter: function(e) {
	                switch (e + "") {
	                    case "0":
	                        return "0";
	                    case "10":
	                        return "10";
	                    case "20":
	                        return "20";
	                    case "30":
	                        return "30";
	                    case "40":
	                        return "40";
	                    case "50":
	                        return "50";
	                    case "60":
	                        return "60";
	                    case "70":
	                        return "70";
	                    case "80":
	                        return "80";
	                    case "90":
	                        return "90";
	                    default:
	                        return "100";
	                }
	            }
	        },
	        pointer: {
	            show: true,
	            width: '5%',
	            height: '70%'
	        },
	       
	        title: {
	            textStyle: {
	                fontSize: '12',
	                fontStyle: 'normal',
	                color: "#ccd3e2"
	            },
	            offsetCenter: [0, '100%']
	        },
	        detail: {
	            textStyle: {
	            	fontSize: '200%'
	            }
	        },
	        data: [{
	            name: "安全平均分",
	            value: Math.floor(gauge_value)
	          
	        }]
	    }]
	};
	
	
	myChart.setOption(option);
	
	
	$(window).resize(function() {
		myChart.resize()
	})
}






})