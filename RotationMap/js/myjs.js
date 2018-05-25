// 获得对应节点
let img = document.getElementsByClassName("box")[0].getElementsByTagName("img")
let next = document.getElementsByClassName("next")[0]
let prev = document.getElementsByClassName("prev")[0]
let point = document.getElementsByClassName("point_box")[0].getElementsByTagName("div")

// 定义各项数据
let state = 0  // 定义状态
let index = 0  // 定义图片当前位置
let nextIndex = 1 // 定义图片跳转的位置

// 定义函数
// 跳转完成后获得重新获得当前位置
function getIndex () {
    index = nextIndex
}
// 获得跳转位置
function getNextIndex (i) {
    // 没传入参数为左右跳转，传入参数为间隔多点跳转
    if (i == undefined) {
        if (state === 0) {
            if ((index + 1) > 4) {
                nextIndex = 0;
            } else {
                nextIndex = index + 1
            }
        }
        if (state === 1) {
            if ((index - 1) < 0) {
                nextIndex = 4;
            } else {
                nextIndex = index - 1
            }
        }
    } else {
        nextIndex = i
    }
}
// 修改当前位置和跳转位置的图层
function changeZIndex () {
    img[index].style.zIndex = "2"
    img[nextIndex].style.zIndex = "2"
    for (let i = 0; i < img.length; i++) {
        if (i != index && i != nextIndex) {
            img[i].style.zIndex = "1"
        }
    }
}
// 设置点跟随图片位置跳转
function showPiont () {
    for (let i = 0; i < point.length; i++) {
        if (i === index) {
            point[i].className = 'on'
        } else {
            point[i].className = ''
        }
    }
}
// 动画函数
function ani (i) {
    img[index].className = ''
    img[nextIndex].className = ''
    getNextIndex(i)
    changeZIndex()
    if (state === 0) {
        img[index].className = 'next_ani_1'
        img[nextIndex].className = 'next_ani_2'
    } else {
        img[index].className = 'prev_ani_1'
        img[nextIndex].className = 'prev_ani_2'
    }
    getIndex()
    showPiont()
}
// 5s自动轮播
function autoPlay () {
    state = 0
    setInterval(() => {
        ani()
    },5000)
}

// 添加监听器
// 右按钮添加点击事件
next.addEventListener("click", () => {
    state = 0
    ani()
}, false)
// 左按钮添加点击事件
prev.addEventListener("click", () => {
    state = 1
    ani()
}, false)
// 对应点添加点击事件
for (let i = 0; i < point.length; i++) {
    point[i].addEventListener("click", () => {
        if (i > index) {
            state = 0
        } else {
            state = 1
        }
        ani(i)
    }, false)
}

// 初始化执行
// 修改第一张图片为最上层
img[0].style.zIndex = 2
// 自动轮播函数执行
autoPlay()
