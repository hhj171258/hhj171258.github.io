// JavaScript Document
$(function(){
	aside();
	btnToggle("#header > span > i", ".aside_wrap", "body");
	resize(".aside_wrap");
	hljs.initHighlighting();
	pre();
});

/* aside */
function aside(){
	var title = $("h2").text();
	var asideLast = $("#aside").find("li").length

	for(var i = 0; i < asideLast; i++){
		var aside = $("#aside").find("li").eq(i).find("a").text();
		if(title == aside){
			$("#aside").find("li").eq(i).addClass("on");
		}
	}
}	

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
	var windowWidthOri = $(window).outerWidth();
	$(window).on("resize", function(){
		var windowWidth = $(window).outerWidth();
		if(windowWidthOri <= 960 && windowWidth > 960){
			$(e).show();
		} else if(windowWidthOri > 960 && windowWidth <= 960){
			$(e).hide();
		}
		windowWidthOri = $(window).outerWidth();
		console.log(windowWidthOri + "/" + windowWidth);	
	})
}

/* pre */
function pre(){
	$("code").each(function(){
		var codeClass = $(this).attr("Class").split(" ")[0];
		$(this).parent().addClass(codeClass);
	})
}