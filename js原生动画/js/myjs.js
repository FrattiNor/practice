var donghua = document.getElementById("donghua");
var button1 = document.getElementById("button1");

button1.addEventListener("click",begin_animate);

var left = 0;

function begin_animate(){
    setTimeout("move()",5);
}

function move(){
    if(left < 200){
        left++;
    }
    donghua.style.left = left+"px";
    setTimeout("move()",5);
}
