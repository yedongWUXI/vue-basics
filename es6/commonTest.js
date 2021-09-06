/*
* 解构赋值
* */

//剩余运算符

let [a, ...b] = [1, 2, 3];
//a = 1
//b = [2, 3]

//举例
let data = {
    id:"1",
    name:"zs",
    age:8
}


console.log(data)


let data2 = {
    class:"三年二班",
    school:"坊前小学",
    ...data
}


console.log(data2)
