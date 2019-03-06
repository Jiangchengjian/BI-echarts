$(function() {
	
	//个人
	$(".head .head1 a").click(function(e){
		e.stopPropagation()
		
		if ($(".head .head1 .head1B").css("display")=="block") {
			$(".head .head1 .head1B").css("display","none")
			$(".contents1").css("display","none")
		} else{
			$(".head .head1 .head1B").css("display","block")
			$(".contents1").css("display","block")
		}
		
		$(".chaxun").css("display","none");
	})
	$(".head .head1 .head1B").click(function(e) {
		e.stopPropagation()
	})
	
	//阻止冒泡
	$("#sandian").click(function(e) {
		e.stopPropagation()
		$(".chaxun").css("display","block")
		$(".head .head1 .head1B").css("display","none")
		$(".contents1").css("display","none")
	})
	$(".chaxun").click(function(e) {
		e.stopPropagation()
	})
	
	$(document).click(function() {						
		$(".chaxun").css("display","none");
		$(".head .head1 .head1B").css("display","none")
		$(".contents1").css("display","none")
	})
	
	$(document).on("click",".cont121 ul li>span:nth-child(2)",function() {
		window.open("HMI/HMI_comprehensive.html","_top")
	})
	
	
	
	
	warning()
	function warning () {
//		测试
		var data=[
			{"warning":"紧急","value":"紧急:2017-6-12 11:00:00,三号锅炉备用压力"},
			{"warning":"重大","value":"重大:2017-6-12 11:00:00,4号锅炉备用压力"},
			{"warning":"一般","value":"2017-6-12 11:00:00,5号锅炉备用压力"},
			{"warning":"一般","value":"2017-6-12 11:00:00,5号锅炉备用压力"},
			{"warning":"一般","value":"2017-6-12 11:00:00,5号锅炉备用压力"},
			{"warning":"一般","value":"2017-6-12 11:00:00,5号锅炉备用压力"}
		]
		var lis=''
				$(data).each(function(i,e) {
					var spans=''
					if(e.warning=="紧急"){
						spans='<img src="../images/home/icon_honggantanhao.png"/>'
					}else if(e.warning=="重大"){
						spans='<img src="../images/home/icon_huanggantanhao.png"/>'
					}
					lis+='<li class="ub">'
							+'<span>'+spans+'</span>'
							+'<span title="'+e.value+'">'+e.value+'</span>'
						+'</li>'
				})
				$(".cont211 ul").html(lis)
		
		
		
//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/warning",
//			async:true,
//			success:function(data) {
//				var lis=''
//				$(data).each(function(i,e) {
//					var spans=''
//					if(e.warning=="紧急"){
//						spans='<img src="../images/home/icon_honggantanhao.png"/>'
//					}else if(e.warning=="重大"){
//						spans='<img src="../images/home/icon_huanggantanhao.png"/>'
//					}
//					lis+='<li class="ub">'
//							+'<span>'+spans+'</span>'
//							+'<span title="'+e.value+'">'+e.value+'</span>'
//						+'</li>'
//				})
//				$(".cont211 ul").html(lis)
//			}
//		});
	}
	
	
	
	hospital()
	function hospital() {
		
//		测试
		var data=[
		{"number":"1","hospital":"中山医院","percent":"95"},
		{"number":"2","hospital":"中山医院","percent":"90"},
		{"number":"3","hospital":"中山医院","percent":"87"},
		{"number":"4","hospital":"中山医院","percent":"85"},
		{"number":"5","hospital":"中山医院","percent":"84"},
		{"number":"6","hospital":"中山医院","percent":"80"},
		{"number":"7","hospital":"中山医院","percent":"79"},
		{"number":"8","hospital":"中山医院","percent":"76"},
		{"number":"9","hospital":"中山医院","percent":"73"},
		{"number":"10","hospital":"中山医院","percent":"70"}
	]
		$(".cont12 .titles span:nth-child(1) b").html(data.length)
				var lis=''
				$(data).each(function(i,e) {
					var bac=''
					if (e.number>=1&&e.number<=3) {
						bac='#EB6100'
					}
					lis+='<li class="ub">'
							+'<span style="background-color: '+bac+';">'+e.number+'</span>'
							+'<span title="'+e.hospital+'">'+e.hospital+'</span>'
							+'<div class="percent">'
								+'<span style="width: '+e.percent+'%;"></span>'
							+'</div>'										
							+'<span>'+e.percent+'</span>'
						+'</li>'
				})
				$(".cont121 ul").html(lis)
				
				
		
//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/hospital",
//			async:true,
//			success:function(data) {
//				$(".cont12 .titles span:nth-child(1) b").html(data.length)
//				var lis=''
//				$(data).each(function(i,e) {
//					var bac=''
//					if (e.number>=1&&e.number<=3) {
//						bac='#EB6100'
//					}
//					lis+='<li class="ub">'
//							+'<span style="background-color: '+bac+';">'+e.number+'</span>'
//							+'<span title="'+e.hospital+'">'+e.hospital+'</span>'
//							+'<div class="percent">'
//								+'<span style="width: '+e.percent+'%;"></span>'
//							+'</div>'										
//							+'<span>'+e.percent+'</span>'
//						+'</li>'
//				})
//				$(".cont121 ul").html(lis)
//			}
//		});
	}
	
	
	
	
	
	
	
})