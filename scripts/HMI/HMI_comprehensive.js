$(document).ready(function(){
	
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
	
	//HMI排行
	$(".cont1LRT span:nth-child(3)").click(function(e) {
		e.stopPropagation()
		$(".cont1LRT .cont1LRT1").css("display","block")
	})
	//维修指数排行
	$(".cont2LLTR").click(function(e) {
		e.stopPropagation()
		$(".cont2LL .cont1LRT1").css("display","block")
	})
	//经济指数排行
	$(".cont2LRTR").click(function(e) {
		e.stopPropagation()
		$(".cont2LR .cont1LRT1").css("display","block")
	})
	//点击消失
	$(document).click(function() {						
		$(".cont1LRT .cont1LRT1").css("display","none");
		$(".cont2LL .cont1LRT1").css("display","none")
		$(".cont2LR .cont1LRT1").css("display","none")
	})
	
	//阻止冒泡
	$(".cont1LRT .cont1LRT1").click(function(e) {
		e.stopPropagation()
	})
	$(".cont2LL .cont1LRT1").click(function(e) {
		e.stopPropagation()
	})
	$(".cont2LR .cont1LRT1").click(function(e) {
		e.stopPropagation()
	})
})
