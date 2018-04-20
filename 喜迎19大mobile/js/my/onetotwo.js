$(document).ready(function(){
    var h = $(window).height();
    var winone = $("#one");
    var wintwo = $("#two");
    var ani = winone.find(".c");
    var ani2 = wintwo.find(".c");
    var tit;
    winone.tap(function(){
        for(var i=0;i<ani.length;i++){
            (function(i){
                tit = ani.eq(i).attr("title");
                ani.eq(i).css("animation-name",tit);
            })(i);
        }
        for(var i=0;i<ani2.length;i++){
            (function(i){
                tit = ani2.eq(i).attr("title");
                ani2.eq(i).css("animation-name",tit);
            })(i);
        }
    tit=winone.attr("title");
    winone.css("animation-name",tit);
    tit=wintwo.attr("title");
    wintwo.css("animation-name",tit);
    // winone.delay(12500).animate({opacity:0});
    // wintwo.delay(13500).animate({opacity:1});
    });
});
