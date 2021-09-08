//  ES6引入新的声明字符串的方式 ``
// 1.声明
// let str = `我是一个字符串`

// 2.内容中可以直接出现换行符(这样能够很好地使用html元素，而不用不断地使用字符串来拼接)

let str = `<ul>
                <li>张彤</li>
               </ul>`

// 3.变量拼接
let love = '阚清子'
let actor = `${love}是个好看的女演员`
console.log(actor)
