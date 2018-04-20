var yourname = document.getElementById("yourname");
var yourname2 = document.getElementById("yourname2");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");
var pass3 = document.getElementById("pass3");
var pass4 = document.getElementById("pass4");
var email = document.getElementById("email");
var email2 = document.getElementById("email2");
var phone = document.getElementById("phone");
var phone2 = document.getElementById("phone2");

var val;
var val2;
var regNumber = /\d+/;
var regString = /[a-zA-Z]+/;
var regemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
var mobile=/^((13[0-9]{1})|15[0-9]{1})+\d{8}$/;

var passnumber;
var passstring;

yourname.onkeyup = function(){
    val = yourname.value;
    if(val.length>10||val.length<4){
        yourname2.className = "redd";
        yourname2.innerHTML = "请输入4到10个字符";
    }
    else{
        yourname2.className = "greenn";
        yourname2.innerHTML = "输入正确";
    }
}
yourname.oninput = function(){
    yourname.onkeyup();
}

pass.onkeyup = function(){
    val = pass.value;
    val2 = pass3.value;
    if(val.length>10||val.length<4){
        pass2.className = "redd";
        pass2.innerHTML = "请输入4到10个字符";
    }
    else if(val.replace(/[^a-zA-Z]/g, '').length<1){
        pass2.className = "redd";
        pass2.innerHTML = "请至少输入1个字母";
    }
    else if(val.replace(/\D/g, '').length<1){
        pass2.className = "redd";
        pass2.innerHTML = "请至少输入1个数字";
    }
    else{
        pass2.className = "greenn";
        pass2.innerHTML = "输入正确";
    }
    if(val2 == ""){
        return;
    }
    else{
        pass3.onkeyup();
    }
}
pass.oninput = function(){
    pass.onkeyup();
}
// if(/^\d+$/.test(str))
// {
// 全为数字，执行...
// }


// pass.onkeyup = function(){
//     val = pass.value;
//     passnumber = 0;
//     passstring = 0;
//     for(var i = 0;i < val.length;i++){
//         // alert(val[i].charCodeAt());
//         if(val[i].charCodeAt()>47||val[i].charCodeAt()<58){
//             passnumber++;
//         }
//         if(val[i].charCodeAt()>64||val[i].charCodeAt()<91){
//             passstring++;
//         }
//         if(val[i].charCodeAt()>96||val[i].charCodeAt()<123){
//             passstring++;
//         }
//     }
//     if(val.length>10||val.length<4){
//         pass2.className = "redd";
//         pass2.innerHTML = "请输入4到10个字符";
//     }
//     else if(passstring < 1){
//             pass2.className = "redd";
//             pass2.innerHTML = "请至少输入1个字母";
//     }
//     else if(passnumber < 1){
//             pass2.className = "redd";
//             pass2.innerHTML = "请至少输入1个数字";
//     }
//     else{
//             pass2.className = "greenn";
//             pass2.innerHTML = "输入正确";
//     }
// }

pass3.onkeyup = function(){
    val = pass.value;
    val2 = pass3.value;
    if(val2.length>10||val.length<4){
        pass4.className = "redd";
        pass4.innerHTML = "请输入4到10个字符";
    }
    else{
        if(val == ""){
            pass4.className = "redd";
            pass4.innerHTML = "未输入第一次的密码";
        }
        else if(val == val2){
            pass4.className = "greenn";
            pass4.innerHTML = "输入正确";
        }
        else{
            pass4.className = "redd";
            pass4.innerHTML = "输入的2次密码不一致";
        }
    }
}
pass3.oninput = function(){
    pass3.onkeyup();
}

email.onkeyup = function(){
    val = email.value;
    if(regemail.test(val)){
        email2.className = "greenn";
        email2.innerHTML = "输入正确";
    }
    else{
        email2.className = "redd";
        email2.innerHTML = "请输入正确的邮箱地址";
    }
}
email.oninput = function(){
    email.onkeyup();
}

phone.onkeyup = function(){
    val = phone.value;
    if(mobile.test(val)){
        phone2.className = "greenn";
        phone2.innerHTML = "输入正确";
    }
    else{
        phone2.className = "redd";
        phone2.innerHTML = "请输入正确的手机号码";
    }
}
phone.oninput = function(){
    phone.onkeyup();
}
