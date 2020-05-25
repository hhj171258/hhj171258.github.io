// JavaScript Document
$(function(){
	$("#header").load("/include/header.html");
	$("#aside").load("/include/aside.html", function asideOn(){
		var title = $("h2").text();
		var asideLast = $("#aside").find("li").length

		for(var i = 0; i < asideLast; i++){
			var aside = $("#aside").find("li").eq(i).find("a").text();
			if(title == aside){
				$("#aside").find("li").eq(i).addClass("on");
			}
		}

	});
	hljs.initHighlighting();
	pre();
	btnToggle("#header span i", ".aside_wrap");
});

/* aside */
function btnToggle(btn, e){
	$(btn).on("click", function(){
		$(this).toggleClass("on");
		$(e).toggle();
	})	
}

/* pre */
function pre(){
	$("code").each(function(){
		var codeClass = $(this).attr("Class").split(" ")[0];
		$(this).parent().addClass(codeClass);
	})
}