/* ES6 允许给参数赋值初始值 */

// 1.形参初始值 具有默认参数的参数 一般位置靠后（潜规则）
function add(a, b, c = 10) {
    return a + b + c
}

// 如果c没有传 就默认为初始值 如果传了 则正常进行
let result = add(1, 2)
console.log(result)


// 2.与结构赋值结合

function connect({host, name, pwd}) {
    console.log(host)
    console.log(name)
    console.log(pwd)
}

connect({
    host: 'localhost',
    name: 'root',
    pwd: 'zhangtong'
})
