var submit = document.getElementById("sure");
var name_var;

submit.onclick = function(){
    name_var = document.getElementById("name").value;
    // alert(name_var.length);
    if(name_var.length>10||name_var.length<4){
        document.getElementById("namep").innerHTML = "请输入的4到10个字符";
    }
    else{
        document.getElementById("namep").innerHTML = "";
    }
}

document.getElementById("name").onfocus = function(){
    document.getElementById("name").className += " colorr";
}

document.getElementById("name").onkeyup = function(){
    name_var = document.getElementById("name").value;
    // alert(name_var.length);
    if(name_var.length>10||name_var.length<4){
        document.getElementById("namep").innerHTML = "请输入的4到10个字符";
    }
    else{
        document.getElementById("namep").innerHTML = "";
    }
}

var oName = document.getElementById("name");

oName.onkeyup = function(){
    name_var = document.getElementById("name").value;
    // alert(name_var.length);
    if(name_var.length>10||name_var.length<4){
        document.getElementById("namep").innerHTML = "请输入的4到10个字符";
    }
    else{
        document.getElementById("namep").innerHTML = "";
    }
}

Object.getOwnPropertyDescriptor( window,'name');
