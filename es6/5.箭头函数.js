/* ES6允许使用箭头(=>)来声明函数 */
// 声明一个函数

let fn = (a, b) => {
    return a + b
}

let result = fn(1, 2)
console.log(result)


// 2.不能作为构造实例化对象

// let person = (name, age) => {
//     this.name = name
//     this.age = age
// }
// let me = new person('tong', 33)
// console.log(me)


// 3.不能使用arguments变量
// let fn = () => {
//     console.log(arguments)
// }
// fn(1, 2, 3)

// 4.箭头函数的简写
// 1)省略小括号 当形参有且只有一个的时候
// let add = n => {
//     return n + n
// }
//  2)省略花括号 当代码只有一条语句的时候 return也要省略 语句的执行结果就是函数的返回值
// let pow = (n) => n * n
// let pow = n=> n * n





/*
* ===================================>>>>>箭头函数练习
*
* */


let data = [
    {
        name:"zs",
        age:18,
        className:"三年四班",
        high:"180",
    },
    {
        name:"ls",
        age:13,
        className:"三年四班",
        high:"150",
    },
    {
        name:"ww",
        age:11,
        className:"三年四班",
        high:"130",
    },
    {
        name:"zl",
        age:8,
        className:"二年四班",
        high:"110",
    },
    {
        name:"ad",
        age:28,
        className:"五年四班",
        high:"180",
    }
]



let filter = data.filter(v=>v.age<15);

console.log(filter)

let map = data.map(v=>v.age);

console.log(map)

