// JavaScript Document
$(function(){
	$("#header").load("/include/header.html", function(){
		btnToggle("#header > span > i", ".aside_wrap", "body");
	});
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
	resize(".aside_wrap");
	hljs.initHighlighting();
	pre();
});

/* aside */
function btnToggle(btn, e, body){
	$(btn).on("click", function(){
		$(this).toggleClass("on");
		$(e).toggle();
		if($(e).is(":visible")){
			$(body).css({"overflow": "hidden"});
		} else{
			$(body).css({"overflow": "scroll"});
		}
	})	
}
function resize(e){
	$(window).on("resize", function(){
		$(e).show();
	})
}
/* pre */
function pre(){
	$("code").each(function(){
		var codeClass = $(this).attr("Class").split(" ")[0];
		$(this).parent().addClass(codeClass);
	})
}