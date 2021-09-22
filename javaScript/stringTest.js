/**
 * String 的练习集
 *
 * 1.参数带 ?  就是可传可不传
 * 2.
 * @type {string}
 */

let string = '/views/layout/Layout'
let int = 123456

//toString
console.log(string.toString())
console.log('int类型：',typeof int)
console.log('toString后int的类型：',typeof int.toString())



//charAt
console.log(string.charAt(3))
console.log(typeof string.charAt(1))


//charCodeAt  返回指定位置char的 unicode编码的位置
console.log(string.charCodeAt(3))

//concat
console.log(typeof string.concat('123'))

//indexOf  返回从指定位置开始 第一个匹配到a的  a的位置
//如果不指定位置 默认从0开始
string.indexOf('a',3)
console.log(string.indexOf('a',3))

//lastIndexOf
//如果不指定 默认从最后一个开始
console.log(string.lastIndexOf('a',8))

//localeCompare
//TODO 不会用
console.log(string.localeCompare('/views/layout/Layout11'))

//match
//replace
//search


//slice  截取字符串 入参start和end  end不填默认是到最后
//注 slice可以截数组
console.log(string.slice(4))
console.log(string.slice())
console.log([1,2,3,3,4,5].slice(3))

//split  通过指定字符 进行截取 返回数组
console.log(string.split('a'))


//substring
//注  和slice区别不大 我感觉有区别的地方一般用不到
console.log(string.substring(7,4))

//toLowerCase
//toUpperCase

//trim  去除开头和结尾的空格 和行结束符
console.log('   taurus   '.trim())


/**
 *
 * Symbol (原始数据类型)
 * ES6数据类型除了 Number、String 、Boolean 、Object、null和 undefined,还新增了 Symbol
 *
 * 表示独一无二的值，最大的用法是用来定义对象的唯一属性名
 *
 *
 */


let sy = Symbol("KK");
console.log(sy);   // Symbol(KK)
console.log(sy.toString());   // Symbol(KK)
console.log(typeof (sy))       // "symbol"

// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("KK");
console.log(sy === sy1)    // false










