
// 对象的解构
const person = {
    name: '赵本山',
    age: '不详',
    aa:'11',
    bb:'',
    cc:'',
    dd:'',
    ee:'',
    ff:'',
}

let test = {
    name: '赵本山',
    age: '不详',
    aa:'22',
    bb:'',
    cc:'',
    dd:'ssss',
}

// test = Object.assign(person,test)
test = Object.assign(test,person)
// test = person

test.name = "张三"

// console.log(test)
console.log(person)

/*
深拷贝和浅拷贝

深拷贝：修改新变量的值不会影响原有变量的值。默认情况下基本数据类型（number，string，null，undefined，boolean）都是深拷贝。
浅拷贝：修改新变量的值会影响原有的变量的值。默认情况下引用类型（object）都是浅拷贝。

*/


//例子：修改test里的属性,person里的属性也会跟着变


// console.log(person)

//可以使用重新new一个对象 来解决浅拷贝
// test = JSON.parse(JSON.stringify(person))
// test = Object.assign(person,test)  //这样也会互相影响！！
//
// test.name = '张三'
//
// console.log(person)
