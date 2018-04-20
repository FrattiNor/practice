var button_to_tk = document.getElementById("buttonn");
var x;

button_to_tk.addEventListener("click",function(){
    createUI();
    passed();

    document.getElementById("bg").addEventListener("click",function(event){
        x = event.target;
        passed2();
        cleanUI();
    });
    document.getElementById("main").addEventListener("click",function(event){
        event.stopPropagation();
    });
    document.getElementById("sure").addEventListener("click",function(event){
        x = event.target;
        passed2();
        cleanUI();
    });
    document.getElementById("noo").addEventListener("click",function(event){
        x = event.target;
        passed2();
        cleanUI();
    });
});


function createUI(){
    var bg = document.createElement("div");
    bg.setAttribute("id","bg");
    bg.setAttribute("title","外部");
    var tk = document.createElement("div");
    tk.setAttribute("id","main");
    var tk_tltle = document.createElement("p");
    tk_tltle.setAttribute("id","tktitle");
    tk_tltle.innerHTML = "这是一个弹出UI层";
    var tk_nr = document.createElement("p");
    tk_nr.setAttribute("id","neirong");
    var tk_button = document.createElement("div");
    tk_button.setAttribute("id","butt");
    var tk_button1 = document.createElement("button");
    tk_button1.setAttribute("id","sure");
    tk_button1.setAttribute("title","确定");
    tk_button1.innerHTML = "确定";
    var tk_button2 = document.createElement("button");
    tk_button2.setAttribute("id","noo");
    tk_button2.innerHTML = "取消";
    tk_button2.setAttribute("title","取消");
    document.body.appendChild(bg);
    bg.appendChild(tk);
    tk.appendChild(tk_tltle);
    tk.appendChild(tk_nr);
    tk.appendChild(tk_button);
    tk_button.appendChild(tk_button1);
    tk_button.appendChild(tk_button2);
}

function cleanUI(){
    var bg1 = document.getElementById("bg");
    document.body.removeChild(bg1);
}

function passed(){
    var nr = document.getElementById("neirong");
    var text = document.getElementById("srnr");
    nr.innerHTML = text.value;
}

function passed2(e){
    var results = document.getElementById("results");
    results.innerHTML = "点击了"+x.getAttribute("title");
}

