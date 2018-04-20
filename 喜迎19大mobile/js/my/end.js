$(document).ready(function(){
    var anij = $("#two").find(".j");
    var three = $("#three");
    $("#dj").tap(function(){
        three.css("top","0");
    });
    $("#sure").tap(function(){
        for(var i=0;i<anij.length;i++){
            (function(i){
                var tit = anij.eq(i).attr("title");
                anij.eq(i).css("animation-name",tit);
            })(i);
        }
        three.hide();
        var x = $("#province").text();
        var y = $("#city").text();
        $("#end31").html("我在"+x+" "+y);
        $("#end32").html("祝福祖国！");
        $("#end33").html("祝贺党的十九大顺利账号开！");
        var d=new Date()
        var day=d.getDate()
        var month=d.getMonth() + 1
        var year=d.getFullYear()
        $("#end22").html("直播时间:"+year+"年"+month+"月"+day+"日");
        $("#end21").html("座位号：01 排 26 座");
    });
    $("#again").tap(function(){
        window.location.reload();
    });
});
