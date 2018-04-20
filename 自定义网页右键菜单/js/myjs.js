let area = document.getElementById("area");//点击区域
let client_x;//鼠标当前的x坐标
let client_y;//鼠标当前的y坐标
let index = 0;//判断是否有菜单，有为1，无为0
let index_1 = 0;//判断菜单1是否已点击，点击为1.未点击为0
let index_2 = 0;//判断菜单2是否已点击，点击为1.未点击为0
let index_3 = 0;//判断菜单3是否已点击，点击为1.未点击为0

//给区域绑定contextmenu事件，重新定义右键效果
area.addEventListener("contextmenu",function(e){
    if(window.event){
        e = window.event;
    }
    e.preventDefault(); //阻止原有的菜单
    e.returnValue = false; //在IE中阻止原有的菜单
    e.stopPropagation();
    //判断是否已经有菜单
    if(index == 0){
        determine();
        addlist();
    }
    else{
        cleanlist();
        determine();
        addlist();
    }
},false);

//给区域绑定左键和中键效果，消除菜单
area.addEventListener("mousedown",function(e){
    if(e.button == 1||e.button == 0){
        cleanlist();
    }
},false);

//获取鼠标当前的xy坐标
function determine(e){
    e = event || window.event;
    client_x = e.clientX;
    client_y = e.clientY;
}

//产生菜单
function addlist(){
    let ul_0 = document.createElement("ul");
    ul_0.setAttribute("id","meau");
    for(let i = 0; i < 3; i++){
        (function(i){
            let li_0 = document.createElement("li");
            li_0.setAttribute("index",i);
            if(i == 2){
                li_0.setAttribute("class","last");
            }
            switch(i){
                case 0:
                    if(index_1 == 1){
                        li_0.setAttribute("class","on");
                    }
                    li_0.innerHTML = "背景变红";
                    break;
                case 1:
                    if(index_2 == 1){
                        li_0.setAttribute("class","on");
                    }
                    li_0.innerHTML = "字体变大"
                    break;
                case 2:
                    if(index_3 == 1){
                        li_0.className += " on";
                    }
                    li_0.innerHTML = "边框变粗"
                    break;
            }
            ul_0.appendChild(li_0);
        })(i);
    }
    ul_0.style.left = client_x+"px";
    ul_0.style.top = client_y+"px";
    document.body.appendChild(ul_0);
    addfunction(ul_0);
    index = 1;
}

//清除菜单
function cleanlist(){
    if(index == 0){
        return;
    }
    let box = document.getElementById("meau");
    document.body.removeChild(box);
    index = 0;
}

//给产生的菜单添加事件
function addfunction(ul_0){
    for(let i = 0; i < 3; i++){
        (function(i){
            let li_0 = ul_0.getElementsByTagName("li")[i];
            let index_0 = li_0.getAttribute("index");
            index_0 = index_0 - 0;
            switch(index_0){
                case 0:
                    addfunction_0(li_0);
                    break;
                case 1:
                    addfunction_1(li_0);
                    break;
                case 2:
                    addfunction_2(li_0);
                    break;
            }
        })(i);
    }
}

//给菜单1绑定事件
function addfunction_0(li_0){
    li_0.addEventListener("click",function(e){
        e.stopPropagation();
        if(index_1 == 0){
            area.style.backgroundColor = "red";
            cleanlist();
            index_1 = 1;
        }
        else{
            area.style.backgroundColor = "#fff";
            cleanlist();
            index_1 = 0;
        }
    },false);
}

//给菜单2绑定事件
function addfunction_1(li_0){
    li_0.addEventListener("click",function(){
        if(index_2 == 0){
            area.style.fontSize = "32px";
            cleanlist();
            index_2 = 1;
        }
        else{
            area.style.fontSize = "16px";
            cleanlist();
            index_2 = 0;
        }
    },false);
}

//给菜单3绑定事件
function addfunction_2(li_0){
    li_0.addEventListener("click",function(){
        if(index_3 == 0){
            area.style.border = "5px solid #000";
            cleanlist();
            index_3 = 1;
        }
        else{
            area.style.border = "1px solid #000";
            cleanlist();
            index_3 = 0;
        }
    },false);
}
