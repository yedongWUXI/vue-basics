/**
 *  js中代表false的
 *  1: false
 *  2: null
 *  3:undefined
 *  4:"" 空字符串
 *  5:0
 *  6:NaN
 *
 *
 *  a&&b
 *　　如果a为true，则执行b并返回b的值；
 *　　如果a为false，则返回false不执行b；
 *  a||b
 *　　如果a为true，则返回a的值不执行b；
 *　　如果a为false，则执行b并返回b的值；
 *
 */

console.log('abc' && '[]')
console.log( 0 && 'abc')
console.log('[]' && 'efg')
console.log('' || 'efg')

// ES6 允许按照一定模式从数组和对象中提取值 对变量进行赋值 ->被称为解构赋值
// 1.数组的解构赋值
const F4 = ['小沈阳', '刘能', '赵四', '宋小宝']
let [xiao, liu, zhao, song] = F4
console.log(xiao)
console.log(liu)
console.log(zhao)
console.log(song)


// 测试Object.assign
const dataSource = {
    name1:1,
    age:2,
    version:3
}

console.log(dataSource)

const dataTarget = {
    name1:'',
    age:'',
    version:'',
    other:''
}

console.log(dataTarget)

Object.assign(dataTarget,dataSource)

console.log(dataTarget)



// 数组转字符  字符转数组
const arry = [1,2,3,4,5]
console.log(arry)
console.log(arry[arry.length-1])

let s = arry.join(',');

console.log(s)
console.log(s.split(','))



/**
 * js里通过数组形式也能访问对象属性
 * 这样在知道对象属性的情况下获取值就比较方便
 */
let myObject = {
    name:"zs"
}

console.log(myObject['name'])
console.log(myObject.name)






















