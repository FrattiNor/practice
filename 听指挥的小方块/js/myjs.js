var butt = document.getElementById("butt");
var textt = document.getElementById("textt");

var row;
var col;
var index;
var degg;

butt.onclick = function(){
    if(textt.value == "start"){
        function_start();
    }
    if(textt.value == "go"){
        function_go();
    }
    if(textt.value == "left"){
        function_left();
    }
    if(textt.value == "right"){
        function_right();
    }
    if(textt.value == "back"){
        function_back();
    }
    if(textt.value == "TOP"){
        function_up2();
    }
    if(textt.value == "DOWN"){
        function_down2();
    }
    if(textt.value == "LEFT"){
        function_left2();
    }
    if(textt.value == "RIGHT"){
        function_right2();
    }
    if(textt.value == "MOVEUP"){
        function_up3();
        // function_go();
    }
    if(textt.value == "MOVERIGHT"){
        function_right3();
        // function_go();
    }
    if(textt.value == "MOVELEFT"){
        function_left3();
        // function_go();
    }
    if(textt.value == "MOVEDOWN"){
        function_down3();
        // function_go();
    }
}

function creatediv(){
    var x = document.createElement("div");
    x.setAttribute("class","new");
    x.setAttribute("id","newdiv");
    var y = document.createElement("div");
    y.setAttribute("class","bu0");
    x.appendChild(y);
    x.style.transform = "rotate(" + degg + "deg)";
    document.getElementById("tablemain").getElementsByTagName("tr")[row].getElementsByTagName("td")[col].appendChild(x);
}

function cleandiv(){
    if(row == undefined||col == undefined){
        return;
    }
    document.getElementById("tablemain").getElementsByTagName("tr")[row].getElementsByTagName("td")[col].innerHTML = "";
}

function function_start(){
    cleandiv();
    degg = 0;
    index = 0;
    row = 4;
    col = 4;
    creatediv();
}


function function_go(){
    if(row == undefined||col == undefined){
        return;
    }
    if(index%4 == 0){
        if(row == 0){
            return;
        }
        cleandiv();
        row--;
        creatediv();
    }
    if(index%4 == 1){
        if(col == 9){
            return;
        }
        cleandiv();
        col++;
        creatediv();
    }
    if(index%4 == 2){
        if(row == 9){
            return;
        }
        cleandiv();
        row++;
        creatediv();
    }
    if(index%4 == 3){
        if(col == 0){
            return;
        }
        cleandiv();
        col--;
        creatediv();
    }
}

function function_clean(){
    if(row == undefined||col == undefined){
        return;
    }
    cleandiv();
}

function function_left(){
    if(row == undefined||col == undefined){
        return;
    }
    degg += 270;
    index += 3;
    cleandiv();
    creatediv();
}

function function_right(){
    if(row == undefined||col == undefined){
        return;
    }
    degg += 90;
    index += 1;
    cleandiv();
    creatediv();
}

function function_back(){
    if(row == undefined||col == undefined){
        return;
    }
    degg += 180;
    index += 2;
    cleandiv();
    creatediv();
}

function function_up2(){
    if(row == 0){
        return;
    }
    cleandiv();
    row--;
    creatediv();
}

function function_right2(){
    if(col == 9){
        return;
    }
    cleandiv();
    col++;
    creatediv();
}

function function_down2(){
    if(row == 9){
        return;
    }
    cleandiv();
    row++;
    creatediv();
}

function function_left2(){
    if(col == 0){
        return;
    }
    cleandiv();
    col--;
    creatediv();
}

function function_up3(){
    if(row == 0){
        return;
    }
    index = 0;
    degg = 0;
    cleandiv();
    row--;
    creatediv();
}

function function_right3(){
    if(col == 9){
        return;
    }
    index = 1;
    degg = 90;
    cleandiv();
    col++;
    creatediv();
}

function function_down3(){
    if(row == 9){
        return;
    }
    index = 2;
    degg = 180;
    cleandiv();
    row++;
    creatediv();
}

function function_left3(){
    if(col == 0){
        return;
    }
    index = 3;
    degg = 270;
    cleandiv();
    col--;
    creatediv();
}
