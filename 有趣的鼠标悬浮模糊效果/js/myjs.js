document.getElementsByClassName("bg")[0].addEventListener("mouseover",function(){
    document.getElementById("box").className = "kuang";
    document.getElementById("bg").className += " mohu";
    document.getElementById("box2").className += " up";
},false);
document.getElementsByClassName("bg")[0].addEventListener("mouseout",function(){
    document.getElementById("box").className = "kuang_1";
    document.getElementById("bg").className = "img";
    document.getElementById("box2").className = "kuang2";
},false);
