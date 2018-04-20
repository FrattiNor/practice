$(document).ready(function(){
    var pHtmlStr = '';
    $("#province").html("北京市");
    $("#city").html("朝阳区");

    for(var name in pc){
        pHtmlStr = pHtmlStr + '<dd class="mydd1">'+name+'</dd>';
    }
    $("#pro").html(pHtmlStr);
    pHtmlStr = '';

    var cityList = pc["北京市"];
        for(var index in cityList){
            pHtmlStr = pHtmlStr + '<dd class="mydd2">'+cityList[index]+'</dd>';
        }
    $("#cit").html(pHtmlStr);
    pHtmlStr = '';

    var h = $("body").height();
    var m = 0.5*h;

    $("#province").tap(function(){
        $("#four").animate({
            top: m
        });
    });

    $(document).on('click',".mydd1",function(){
        selectedItem1(this);
    });

    function selectedItem1(obj){
        var $dd1 = $(obj);
        var dd1 = $dd1.text();
        var dd = pc[dd1][0];
        $("#province").html(dd1);
        $("#city").html(dd);
        $("#four").animate({
            top: h
        });
        changecity(dd1);
    }

    function changecity(obj){
        var pHtmlStr = '';
        var cityList = pc[obj];;
        for(var index in cityList){
            pHtmlStr = pHtmlStr + '<dd class="mydd2">'+cityList[index]+'</dd>';
        }
        $("#cit").html(pHtmlStr);
    }

    $("#city").tap(function(){
        $("#five").animate({
            top: m
        });
    });

    $(document).on('click',".mydd2",function(){
        selectedItem2(this);
    });

    function selectedItem2(obj){
        var $dd2 = $(obj);
        var dd2=$dd2.html();
        $("#city").html(dd2);
        $("#five").animate({
            top: h
        });
    }
});
