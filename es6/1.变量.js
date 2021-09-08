/*
var:
 1.可以重复声明
 2.无法限制修改
 3.没有块级作用域
*/

/*
在es6中有了两种新的变量
let
    1.不能重复声明
*/

//  2.块儿级作用域（全局 函数 eval）
{
    let name = "zhangtong"
}
// 会报错
console.log(name)

// 3.不存在变量提升
console.log(song)
let song = "星辰大海"

// 不影响作用域链

{
    let singer = "告五人"

    function fn() {
        console.log(singer)
    }
    fn()
}

/*
const
    1.一定要要赋初始值  */
const NAME = "张彤"
//  2.一般常量使用大写（潜规则）
//  3.常量的值不能修改
//  4.块级作用域
//  5.对于数组和对象的元素修改 不算对常量的修改
