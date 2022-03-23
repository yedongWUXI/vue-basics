/*


||  和 &&
假值：null 、 undefined、0、''

|| ：如果左侧是假值  就取右边的
&& ：如果左侧是假值  就取左边的


逻辑与(&&)是一种短路逻辑，如果左侧表达式为 false，则直接短路返回结果，不再运算右侧表达式。

逻辑或(||)是一种短路逻辑，如果左侧表达式为 true，则直接短路返回结果，不再运算右侧表达式。

* */


let user;  //定义变量
(! user && console.log("没有赋值"));  //返回提示信息“没有赋值”
console.log((null && console.log("没有赋值")))
console.log((undefined && console.log("没有赋值")))
console.log((0 && console.log("没有赋值")))
console.log(('' && console.log("没有赋值")))

console.log(!user)
