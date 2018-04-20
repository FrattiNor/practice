document.getElementById("chek").addEventListener("click",function(){
    let x = document.getElementById("chek").getAttribute("class");
    if(x == "chek2"){
        document.getElementById("chek").className = "chek3";
    }
    if(x == "chek3"){
        document.getElementById("chek").className = "chek2";
    }
},false);
