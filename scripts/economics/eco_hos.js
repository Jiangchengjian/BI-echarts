$(document).ready(function() {
	
	
	$(".cont1LRT1").niceScroll({  
			cursorcolor:"#999",  
			cursoropacitymax:1,  
			touchbehavior:false,  
			cursorwidth:"5px",  
			cursorborder:"0",  
			cursorborderradius:"5px"  
		}); 
	
	
	//指数点击
	$(".cont1LRBL ul li").click(function() {	
		$(".cont1LRBL ul li").removeClass("hovers")
		$(this).addClass("hovers")		
	})
	
	//排行
	$(".cont1LRT span:nth-child(3)").click(function(e) {
		e.stopPropagation()
		$(".cont1LRT .cont1LRT1").css("display","block")
	})
	
	//点击消失
	$(document).click(function() {						
		$(".cont1LRT .cont1LRT1").css("display","none");
	})
	
	//阻止冒泡
	$(".cont1LRT .cont1LRT1").click(function(e) {
		e.stopPropagation()
	})
	
	
	
	
	
	
	$(".cont21LT span:nth-child(1)").click(function() {
		$("#guolu").css('z-index','99')
		$("#havc").css('z-index','-1')
		$(".cont21LT span").css('background-color','rgba(0,0,0,0)')
		$(this).css('background-color','rgba(0,155,255,0.25)')
	})

	$(".cont21LT span:nth-child(2)").click(function() {
		$("#guolu").css('z-index','-1')
		$("#havc").css('z-index','99')
		$(".cont21LT span").css('background-color','rgba(0,0,0,0)')
		$(this).css('background-color','rgba(0,155,255,0.25)')
	})
	
	
	$(".cont21 .cont21R .cont21RT .cont21RT1>span:nth-child(1)").click(function() {
		window.open("eco_equipment.html","_top")
	})
	
})