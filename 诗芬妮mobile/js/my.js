var index=0;

$("body").swipeDown(function(){
	if(index==0){
		return;
	}
	var h= $("body").height();
	h=-h;
	index=index-1;
	h=h*index;
//	$(".list").css("top",h);
	$(".list").animate({top: h});
	$(".list1").eq(index).find(".c").hide();
	setTimeout(function(){
		$(".list1").eq(index).find(".c").show();
	},500);
});

$("body").swipeUp(function(){
	if(index==10){
		return;
	}
	var h= $("body").height();
	h=-h;
	index=index+1;
	h=h*index;
//	$(".list").css("top",h);
	$(".list").animate({top: h});
	$(".list1").eq(index).find(".c").hide();
	setTimeout(function(){
		$(".list1").eq(index).find(".c").show();
	},500);
});
