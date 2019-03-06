$(document).ready(function() {
	
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
	
	
	$(document).on("click",".contR11 ul li>span:nth-child(2)",function() {
		window.open("HMI/HMI_comprehensive.html","_top")
	})
	$(document).on("click",".contR2 ul li>span:nth-child(2)",function() {
		window.open("HMI/HMI_comprehensive.html","_top")
	})
	
	hosbest()
	function hosbest() {
//		测试
		var data={
			"anquan":"中山医院",
			"yunxin":"华山北院",
			"feiyong":"华山医院",
			"jienneg":"中山医院"
		}
		$(".contL211").html(data.anquan)
		$(".contL212").html(data.yunxin)
		$(".contL213").html(data.feiyong)
		$(".contL214").html(data.jienneg)
		
		
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/hosbest",
//			async:true,
//			success:function(data) {
////				console.log(data)
//				$(".contL211").html(data.anquan)
//				$(".contL212").html(data.yunxin)
//				$(".contL213").html(data.feiyong)
//				$(".contL214").html(data.jienneg)
//			}
//		});
	}
	
	
	
	
	weixiutop()
	function weixiutop() {
		
//		测试
		var data=[
		{"number":"1","hospital":"中山医院","percent":"95.00"},
		{"number":"2","hospital":"中山医院","percent":"90.40"},
		{"number":"3","hospital":"中山医院","percent":"87.05"},
		{"number":"4","hospital":"中山医院","percent":"85.40"},
		{"number":"5","hospital":"中山医院","percent":"84.07"},
		{"number":"6","hospital":"中山医院","percent":"80.02"},
		{"number":"7","hospital":"中山医院","percent":"79.80"},
		{"number":"8","hospital":"中山医院","percent":"76.09"}
	]
		$(".contR111 span:nth-child(1) b").html(data.length)
				var lis=''
				$(data).each(function(i,e) {
					var bac=''
					if (e.number>=1&&e.number<=3) {
						bac='#22AC38'
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
				$(".contR11 ul").html(lis)
				
				
		
//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/weixiutop",
//			async:true,
//			success:function(data) {
//				$(".contR111 span:nth-child(1) b").html(data.length)
//				var lis=''
//				$(data).each(function(i,e) {
//					var bac=''
//					if (e.number>=1&&e.number<=3) {
//						bac='#22AC38'
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
//				$(".contR11 ul").html(lis)
//			}
//		});
	}
	
	
	
	
	weixiubottom()
	function weixiubottom() {
		
//		测试
		var data=[
		{"number":"1","hospital":"中山医院","percent":"95.00"},
		{"number":"2","hospital":"中山医院","percent":"90.40"},
		{"number":"3","hospital":"中山医院","percent":"87.05"},
		{"number":"4","hospital":"中山医院","percent":"85.40"},
		{"number":"5","hospital":"中山医院","percent":"84.07"},
		{"number":"6","hospital":"中山医院","percent":"80.02"},
		{"number":"7","hospital":"中山医院","percent":"79.80"},
		{"number":"8","hospital":"中山医院","percent":"76.09"}
	]
		$(".contR21 span:nth-child(1) b").html(data.length)
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
				$(".contR2 ul").html(lis)
				
				
		
//		接口
//		$.ajax({
//			type:"get",
//			url:"http://localhost:3000/weixiubottom",
//			async:true,
//			success:function(data) {
//				$(".contR21 span:nth-child(1) b").html(data.length)
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
//				$(".contR2 ul").html(lis)
//			}
//		});
	}
	
	
	
	
	
	
	
})
