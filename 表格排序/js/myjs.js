var row,col;
var row_max = 4;
var col_max = 3;
var sun;
var index = 0;

document.body.onload = function(){
    var w = document.getElementById("table").clientWidth;
    var but = document.getElementById("butt");
    but.style.width = w+"px";
    jiesuan();
}

function jiesuan(){
    row = 1;
    col = 1;
    for(row;row <= row_max;row++){
        sun = 0;
        index = 0;
        for(col = 1;col <= col_max;col++){
            var y = document.getElementById("table").getElementsByTagName("tr")[row].getElementsByTagName("td")[col].getElementsByTagName("input")[0];
            y.addEventListener("input",jiesuan,false);
            var x = y.value;
            if(x == ""){
                continue;
            }
            if(x){
                index = 1;
            }
            x = x-0;
            sun += x;
        }
        if(index == 0){
            document.getElementById("table").getElementsByTagName("tr")[row].getElementsByTagName("td")[4].innerHTML = "";
            continue;
        }
        document.getElementById("table").getElementsByTagName("tr")[row].getElementsByTagName("td")[4].innerHTML = sun;
    }
}

document.getElementById("addd").addEventListener("click",function(){
    var value = document.getElementById("value").value;
    var table = document.getElementById("table");
    if(value == ""){
        return;
    }
    if(value > row_max+1){
        table.appendChild(createtr());
        return;
    }
    if(value < 1){
        return;
    }
    var point = table.getElementsByTagName("tr")[value];
    table.insertBefore(createtr(),point);
    row_max++;
    jiesuan();
    return;
},false);

function createtd(){
    var tdd = document.createElement("td");
    var inputt = document.createElement("input");
    tdd.appendChild(inputt);
    return tdd;
}

function createtr(){
    var trr = document.createElement("tr");
    for(var i = 0;i <= col_max;i++){
        trr.appendChild(createtd());
    }
    var tdd = document.createElement("td");
    trr.appendChild(tdd);
    return trr;
}

document.getElementById("shanchu").addEventListener("click",function(){
    var value = document.getElementById("value").value;
    var table = document.getElementById("table");
    if(value == ""){
        return;
    }
    if(value < 1){
        return;
    }
    if(value > row_max){
        return;
    }
    var point = table.getElementsByTagName("tr")[value];
    table.removeChild(point);
    jiesuan();
    row_max--;
    return;
},false);

for(col = 1;col <= col_max+1;col++){
    (function(col){
        document.getElementById("table").getElementsByTagName("tr")[0].getElementsByTagName("td")[col].getElementsByTagName("span")[0].addEventListener("click",function(){
            jiesuan();
            var change = new Array();
            for(var i = 1;i <= row_max;i++){
                for(var j = i;j <=row_max;j++){
                    if(document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[col].getElementsByTagName("input")[0]){
                        max = document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[col].getElementsByTagName("input")[0].value;
                    }
                    else{
                        max = document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[col].innerText;
                    }
                    var x;
                    if(document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[col].getElementsByTagName("input")[0]){
                        x = document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[col].getElementsByTagName("input")[0].value;
                    }
                    else{
                        x = document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[col].innerText;
                    }
                    x = x-0;
                    if(x > max){
                        for(var n = 0;n <= col_max;n++){
                            change[n] =  document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value;
                            document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value = document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value;
                            document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value = change[n];
                        }
                    }
                }
            }
            jiesuan();
        },false);

        document.getElementById("table").getElementsByTagName("tr")[0].getElementsByTagName("td")[col].getElementsByTagName("span")[1].addEventListener("click",function(){
            jiesuan();
            var change = new Array();
            for(var i = 1;i <= row_max;i++){
                for(var j = i;j <=row_max;j++){
                    if(document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[col].getElementsByTagName("input")[0]){
                        max = document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[col].getElementsByTagName("input")[0].value;
                        if(max == ""){
                            max = Infinity;
                        }
                    }
                    else{
                        max = document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[col].innerText;
                        if(max == ""){
                            max = Infinity;
                        }
                    }
                    var x;
                    if(document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[col].getElementsByTagName("input")[0]){
                        x = document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[col].getElementsByTagName("input")[0].value;
                    }
                    else{
                        x = document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[col].innerText;
                    }
                    x = x-0;
                    if(x == ""){
                        x = Infinity;
                    }
                    if(x < max){
                        for(var n = 0;n <= col_max;n++){
                            change[n] =  document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value;
                            document.getElementById("table").getElementsByTagName("tr")[i].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value = document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value;
                            document.getElementById("table").getElementsByTagName("tr")[j].getElementsByTagName("td")[n].getElementsByTagName("input")[0].value = change[n];
                        }
                    }
                }
            }
            jiesuan();
        },false);
    })(col);
}


