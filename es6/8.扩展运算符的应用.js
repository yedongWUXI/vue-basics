/*扩展运算符的应用 符号:...  */
// 1.合并数组
const kuaizi = ['王太利', '肖央']

const array1 = ['1', '2']

const result = [...kuaizi, ...array1]
const result2 = [kuaizi, array1]
console.log("使用扩展运算符",result)
console.log("未使用扩展运算符",result2)

// 2.数组的克隆
const arr1 = ['a', 'b', 'c']
const arr2 = [...arr1]
console.log(arr2)
