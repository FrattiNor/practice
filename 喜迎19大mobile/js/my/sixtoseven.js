$(document).ready(function(){
    var anii = $("#two").find(".i");
    var tit;
    $("#fly").tap(function(){
        for(var i = 0;i < anii.length;i++){
            (function(i){
                tit = anii.eq(i).attr("title");
                anii.eq(i).css("animation-name",tit);
            })(i);
        }
    });
});
