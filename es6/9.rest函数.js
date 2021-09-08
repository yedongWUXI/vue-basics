/*
ES6引入rest 用于获取函数的实参 用来代替arguments

rest参数(形式为...变量名)
所谓的rest,顾名思义就是获取剩余的参数,函数中所有多余的参数都会放进数组中然后赋值给这个rest参数


*/


/* ES5获取实参的方式: */
function date() {
    console.log(arguments)
}

date("张彤", "祢豆子")


/*  reset参数 */

function date2(...args) {
    // 打印出来的是数组
    console.log(args)
}

date2("张彤", "祢豆子")


// rest 参数必须要放在参数的最后,不然会报错
function fn(a, b, ...args) {
    console.log(a)
    console.log(b)
    // args打印出来的是数组
    console.log(args)
}

fn(1, 2, 3, 4, 5, 6)
