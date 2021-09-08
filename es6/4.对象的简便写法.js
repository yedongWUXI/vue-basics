/* ES6中 允许在大括号里 直接写入变量和函数 作为对象的属性和方法 */

let name = "张彤"
let change = function () {
    console.log("啦啦啦")
}
const school = {


    /* 等于
    name:name,
    change:change */
    name,
    change,
    /* 等于improve:function(){

    } */
    improve() {
        // 函数
    }


}

console.log(school)
