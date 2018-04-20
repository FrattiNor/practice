$(document).ready(function(){
    var anid = $("#two").find(".d");
    var tit;
    $("#bike").tap(function(){
        for(var i = 0;i < anid.length;i++){
            (function(i){
                tit = anid.eq(i).attr("title");
                anid.eq(i).css("animation-name",tit);
            })(i);
        }
    });
});
