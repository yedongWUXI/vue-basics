// ES6 允许按照一定模式从数组和对象中提取值 对变量进行赋值 ->被称为解构赋值

// 1.数组的解构赋值
const F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
let [xiao, liu, zhao, song] = F4
console.log(xiao)
console.log(liu)
console.log(zhao)
console.log(song)

// 对象的解构
const person = {
    name: '赵本山',
    age: '不详'
}

let test = {
    name,
    age
} = person

console.log(test)




/*
深拷贝和浅拷贝

深拷贝：修改新变量的值不会影响原有变量的值。默认情况下基本数据类型（number，string，null，undefined，boolean）都是深拷贝。
浅拷贝：修改新变量的值会影响原有的变量的值。默认情况下引用类型（object）都是浅拷贝。

*/


//例子：修改test里的属性,person里的属性也会跟着变
test.name = '张三'

console.log(person)

//可以使用重新new一个对象 来解决浅拷贝
test = JSON.parse(JSON.stringify(person))
console.log(test)
