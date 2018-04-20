$(document).ready(function(){
    var anih = $("#two").find(".h");
    var tit;
    $("#dongche").tap(function(){
        for(var i = 0;i < anih.length;i++){
            (function(i){
                tit = anih.eq(i).attr("title");
                anih.eq(i).css("animation-name",tit);
            })(i);
        }
    });
});
