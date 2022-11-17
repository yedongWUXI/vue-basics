/*
什么是匿名函数：
如var fun = function(){},这里function如果不赋值给fun那么它就是一个匿名函数(或者说是函数声明)




匿名函数的调用方式：
1.使用()
2.匿名函数前加void
3.匿名函数前加typeof
4.匿名函数前加new
5.使用运算符,比如 - + -- ++ ~ !


ps:   ！！！！！！
要在函数体后面加括号就能立即调用，则这个函数必须是函数表达式，不能是函数声明。
以上方式都是为了让函数声明变成函数表达式

* */


//匿名函数自调用举例
(function () {
    console.log("匿名函数自调用")
})();
void function () {
    console.log("匿名函数自调用")
}();
typeof function () {
    console.log("匿名函数自调用")
}();
new function () {
    console.log("匿名函数自调用")
}();
-function () {
    console.log("匿名函数自调用")
}();



//匿名函数自调用语法糖
//1.定义函数
const a = function () {
    console.log("匿名函数自调用")
}
//2.调用函数
a();









