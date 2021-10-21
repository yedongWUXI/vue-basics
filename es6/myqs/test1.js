//之前的用法

let person = {
    name:"zs",
    age:18,
    className:"三年二班"
}


// let name = person.name
// let age = person.age
// let className = person.className

//现在的用法  (对象模型的解构)
let {name,age,className} = person
console.log(name)

console.log(typeof name)
//object
console.log(typeof {name,age,className})
