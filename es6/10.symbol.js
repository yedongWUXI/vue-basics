/* es6 引入了入一种新的原始数据类型 Symbol 表示独一无二的值。
   Symbol特点:
   1.Symbol的值是唯一的,用来解决命名冲突的问题
   2.Symbol的值不能与其他数据进行运算
   3.Symbol定义的对象属性不能使用for...in 循环遍历 但是可以使用Reflect.ownkKeys来获取对象的所有键名 */


//1.创建Symbol
let s = Symbol()
console.log(s, typeof s)

let s2 = Symbol("张彤")
let s3 = Symbol("张彤")
// 结果为false
console.log(s2 === s3)


// 2.Symbol.for 进行创建
let s4 = Symbol.for("张彤")
let s5 = Symbol.for("张彤")
// 结果为true

console.log(s4 === s5)
