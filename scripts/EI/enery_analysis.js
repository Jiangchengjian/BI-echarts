$(document).ready(function() {
	
	//阻止冒泡
	$(".heads_j_j span:nth-child(1)").click(function(e) {
		e.stopPropagation()
		$(".chaxun").css("display","block")
	})
	$(".chaxun").click(function(e) {
		e.stopPropagation()
	})
	
	$(document).click(function() {						
		$(".chaxun").css("display","none");
	})
	
	
	
	$(".cont21 .cont21R .cont21RT>ul li .lis .liss>.span2").click(function() {
		window.open("energy_hos.html","_top")
	})
	
	$(".cont21 .cont21R .cont21RT .cont21RT1>span:nth-child(1)").click(function() {
		window.open("energy_indexlist.html","_top")
	})
})