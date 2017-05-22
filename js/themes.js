function toLight(){
	$("body").css({
		"color":"#2d2e2e",
		"background-color":"white"
	});
	$("p").css("color","black");
	$("a").css("color","rgb(51, 122, 183)");
	$("#githubID").css("color","#2d2e2e");
	$(".gridSquare h3 a").css("color","rgb(51, 122, 183)");
	$("hr").css("border-color","#2d2e2e");
	$("#contacts").css({
		"color":"#2d2e2e",
		"background-color":"#eeeeee"
	});
	$("#contacts a p").css("color","rgb(51, 122, 183)");
	$(".gridSquare").css("background-color","white");
}

function toDark(){
	$("body").css({
		"color":"rgb(0, 216, 255)",
		"background-color":"rgb(21, 21, 21)"
	});
	$("p").css("color","white");
	$("a").css("color","rgb(0, 216, 255)");
	$("#githubID").css("color","#000");
	$(".gridSquare h3 a").css("color","rgb(0, 216, 255)");
	$("hr").css("border-color","rgb(0, 216, 255)");
	$("#contacts").css({
		"color":"#fff",
		"background-color":"rgba(0, 0, 0, 0.9)"
	});
	$("#contacts a p").css("color","rgb(0, 216, 255)");
	$(".gridSquare").css("background-color","rgb(60, 60, 60)");
}