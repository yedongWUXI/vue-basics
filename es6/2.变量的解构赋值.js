// ES6 允许按照一定模式从数组和对象中提取值 对变量进行赋值 ->被称为解构赋值

// 1.数组的解构赋值
let F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
let F5 = []
F5= F4
F5[0]= "sdfdfds"
// console.log(xiao)
// console.log(liu)
// console.log(zhao)
// console.log(song)

// console.log(F4)
console.log(F4)


// 对象的解构
const person = {
    name: '赵本山',
    age: '不详'
}

let {
    name,
    age
} = person//这个相当于 let name = person.name; let age = person.age


console.log(name)




/*
深拷贝和浅拷贝

深拷贝：修改新变量的值不会影响原有变量的值。默认情况下基本数据类型（number，string，null，undefined，boolean）都是深拷贝。
浅拷贝：修改新变量的值会影响原有的变量的值。默认情况下引用类型（object）都是浅拷贝。

*/


//例子：修改test里的属性,person里的属性也会跟着变。因为用了“=”,指向了同一个内存地址
test.name = '张三'
console.log(person)

//可以使用重新new一个对象 来解决浅拷贝
test = JSON.parse(JSON.stringify(person))
console.log(test)
