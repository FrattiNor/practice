function Observer(data) {
    this.data = data;
    this.walk(data);
    console.log("定义了新的Observer对象");
}
// 定义Observer函数定义

let p = Observer.prototype;
// 定义Observer的原型

p.walk = function(obj){
    let val;
    for(let name in obj){
        if(obj.hasOwnProperty(name)){
            // 这里为什么要用hasOwnProperty进行过滤呢？
            // 因为for...in 循环会把对象原型链上的所有可枚举属性都循环出来
            // 而我们想要的仅仅是这个对象本身拥有的属性，所以要这么做。
            val = obj[name];
            if(val == "object"){
                // 这里进行判断，如果还没有遍历到最底层，继续new Observer
                new Observer(val);
            }
            this.convert(name, val);
        }
    }
};
// 此函数用于深层次遍历对象的各个属性
// 采用的是递归的思路
// 因为我们要为对象的每一个属性绑定getter和setter
// 给Observer的原型定义递归函数，并赋予get和set函数

p.convert = function(name, val){
    Object.defineProperty(this.data, name, {
        enumerable: true,
        configurable: true,
        get: function(){
            console.log("你访问了" + name);
            return val;
        },
        set: function(newval){
            console.log('你设置了' + name);
            console.log('新的' + name + ' = ' + newval);
            if(typeof newval === "object"){
                new Observer(newval);
            }
            if (newval === val) return;
            val = newval;
        }
    });
};
// 给Observer的原型定义get和set函数

// Observer.prototype.$watch = function(attr, callback){
//     this.eventsBus.on(attr, callback);
// }


// let app = new Observer({
//     name: 'liujianhuan',
//     age: 25,
//     company: 'Qihoo 360',
//     address: 'Chaoyang, Beijing'
// })

// app.$watch('age', function(oldVal, newVal){
//     console.log(`我的年龄变了，原来是: ${oldVal}岁，现在是：${newVal}岁了`)
// })

// app.$watch('age', function(oldVal, newVal){
//     console.log(`我的年龄真的变了诶，竟然年轻了${oldVal - newVal}岁`)
// })
