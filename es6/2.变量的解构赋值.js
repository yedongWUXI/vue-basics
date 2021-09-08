// ES6 允许按照一定模式从数组和对象中提取值 对变量进行赋值 ->被称为解构赋值

// 1.数组的解构赋值
const F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
let [xiao, liu, zhao, song] = F4
console.log(xiao)
console.log(liu)
console.log(zhao)
console.log(song)

// 对象的解构
const zhao1 = {
    name: '赵本山',
    age: '不详',
    xiaopin: function () {
        console.log("我可以演小品")
    }
}

let test = {
    name,
    age,
    xiaopin
} = zhao1

console.log(test)
