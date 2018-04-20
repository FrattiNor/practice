$(document).ready(function(){
    var anig = $("#two").find(".g");
    var tit;
    $("#subway").tap(function(){
        for(var i = 0;i < anig.length;i++){
            (function(i){
                tit = anig.eq(i).attr("title");
                anig.eq(i).css("animation-name",tit);
            })(i);
        }
    });
});
