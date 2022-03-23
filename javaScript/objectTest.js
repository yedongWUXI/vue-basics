/*
在 JavaScript 中，几乎所有的对象都是 Object 类型的实例，它们都会从 Object.prototype 继承属性和方法。

prototype 属性使您有能力向对象添加  属性 和 方法

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object

*/
let person=new Object();
person.firstname="John";
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";

console.log(person)

//添加属性
Object.prototype.hight = "18"
// person.hight = "180"
console.log(person)
console.log(person.prototype)


/**
 * Object.keys
 *
 * Object.keys 返回一个所有元素为字符串的数组，其元素来自于从给定的object上面可直接枚举的属性。这些属性的顺序与手动遍历该对象属性时的一致。
 */
console.log(Object.keys(person))
console.log(Object.values(person))


// simple array
const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']
console.log(Object.values(arr)); // console: ['0', '1', '2']

// array like object
const obj = {0: 'a', 1: 'b', 2: 'c'};
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
const anObj = {100: 'a', 2: 'b', 7: 'c'};
console.log(Object.keys(anObj)); // console: ['2', '7', '100']




const test = [
    {
        name:"zs",
        age:18
    },{
        name:"zs",
        age:18
    },{
        name:"zs",
        age:18
    },{
        name:"zs",
        age:18
    }
]
console.log(Object.keys(test))
console.log(Object.values(test))






