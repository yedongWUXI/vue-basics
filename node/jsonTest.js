/**
 * stringify
 *
 * Converts a JavaScript value to a json.
 *
 * replacer:
 * 可选
 * 可以是function  v1是 key v2是value  return的是value (暂时和文档对不上)
 * 可以是array     返回这个array包含的key
 *
 * space:
 * 可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格,
 * 如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t
 *
 *
 * 1.不改变原有对象
 * 2.
 */
let object = {
    age: '18',
    name: 'zs',
    type: 'ss',
    version: '1.0.0',
}

objectText = JSON.stringify(object)

//replacer是function
let s = JSON.stringify(object, (v1, v2) => {
    if (v1 === 'name') {
        v2 = 'ls'
    }
    return v2
});
console.log(s)

//replacer是array
let s1 = JSON.stringify(object, ['name', 'type']);
console.log(s1)


//space  进行缩进
let s3 = JSON.stringify(object, null, 10);
console.log(s3)


/**
 *
 * parse
 *
 * reviver:
 * 可选  和stringify的replacer 一样
 *
 */

let parse = JSON.parse(objectText, (v1, v2) => {
    if (v1 === 'age') {
        v2 = 99
    }
    return v2
});
console.log(parse)
