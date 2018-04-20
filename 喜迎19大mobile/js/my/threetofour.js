$(document).ready(function(){
    var anif = $("#two").find(".f");
    var tit;
    $("#bus").tap(function(){
        for(var i = 0;i < anif.length;i++){
            (function(i){
                tit = anif.eq(i).attr("title");
                anif.eq(i).css("animation-name",tit);
            })(i);
        }
    });
});
