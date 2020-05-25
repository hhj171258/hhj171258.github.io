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
	menu("#header span", ".aside_wrap", "#aside");
	hljs.initHighlighting();
	pre();
});

/* aside */
function menu(btn, e1, e2){
	$(btn).on("click", function(){
		$(e1).toggle();
		$(e2).toggle();
		$("body").css("overflow", "hidden");
		console.log(this);
	})
}

/* pre */
function pre(){
	$("code").each(function(){
		var codeClass = $(this).attr("Class").split(" ")[0];
		$(this).parent().addClass(codeClass);
	})
}