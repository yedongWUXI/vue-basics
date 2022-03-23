let array = ["1", "2", "3", "4"]

console.log(array.length)

console.log(array.toString())

//pop  移除array的最后一个index 并返回移除的元素
console.log(array.pop())
console.log(array)

//shift 移除array的第一个index 并返回移除的元素
console.log(array.shift())
console.log(array)


//unshift 把items插入array头部 返回新array的长度
console.log(array.unshift("5", "7", "9"))
console.log(array.length)
console.log(array)


//push  改变原有的array
console.log(array.push("a", "b"))
console.log(array)

//concat  并不改变原有的array
console.log(array.concat("c", "d"))
console.log(array)

//join  separator(分隔符)
console.log(array.join(","))

console.log(array.reverse())


//sort  排序 根据内部函数的compare后的返回值进行排序
array = [1, 2, 4, 5, 22, 4, 2, 11]
console.log(array.sort((v1, v2) => v1 - v2))

let objectArray = [
    {
        name: "zs",
        age: 18
    },
    {
        name: "ls",
        age: 28
    },
    {
        name: "ww",
        age: 5
    },
    {
        name: "zl",
        age: 11
    }
]

objectArray.sort((v1, v2) => v1.name.localeCompare(v2.name))
console.log(objectArray)


/**
 * splice 和 slice 的区别
 */

//splice  截取array 并返回截取的元素, 会改变原有array
console.log(array)

console.log(array.splice(1, 2))

console.log(array)

console.log(array.splice(1, 2, 222))

console.log(array)

//slice 截取array 并返回截取的元素, 但不会改变原有array
console.log(array.slice(1, 2))

console.log(array)


//indexOf  返回从指定位置开始 第一个匹配到a的  a的位置
//如果不指定位置 默认从0开始
console.log(array.indexOf(5, 1))

//lastIndexOf
//如果不指定 默认从最后一个开始
console.log(array.lastIndexOf(5))


/**
 * every 不会改变原始数组
 *
 * 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
 * 如果所有元素都满足条件，则返回 true。
 *
 * @param callBackFn 必填
 * {
 *     value : 必填 代表每个元素
 *     index : 可选 代表当前元素的index
 *     array : 可选 代表该数组
 * }
 *
 * @param thisArg (外部定义的变量)  可选
 * 可以被 callBackFn 内部调用
 */

function checkItem(v) {
    return v >= 1;
}

console.log(array.every(checkItem))
//简化成lambda表达式
let thisArg = 5
console.log(array.every((v, index, arr) => {
    console.log(index)
    console.log(arr)
    console.log(thisArg)
    return v >= 1
}), thisArg)


/**
 * some  返回boolean 是否有符合条件的
 *
 * @param callBackFn 必填
 * {
 *     value : 必填 代表每个元素
 *     index : 可选 代表当前元素的index
 *     array : 可选 代表该数组
 * }
 *
 * @param thisArg (外部定义的变量)  可选
 * 可以被 callBackFn 内部调用
 *
 */

console.log(array.some((v) => v === 1))

/**
 * forEach
 *
 * @param callBackFn 必填
 * {
 *     value : 必填 代表每个元素
 *     index : 可选 代表当前元素的index
 *     array : 可选 代表该数组
 * }
 *
 * @param thisArg (外部定义的变量)  可选
 * 可以被 callBackFn 内部调用
 *
 */

array.forEach((v, index, t) => {
    console.log(v)
    console.log(index)
    console.log(t)
})

/**
 * map  处理每个元素 并返回处理后的array
 *
 * @param callBackFn 必填
 * {
 *     value : 必填 代表每个元素
 *     index : 可选 代表当前元素的index
 *     array : 可选 代表该数组
 * }
 *
 * @param thisArg (外部定义的变量)  可选
 * 可以被 callBackFn 内部调用
 */
let mapNumbers = array.map((v) => v + 1);
console.log(mapNumbers)

/**
 * filter
 *
 * @param callBackFn 必填
 * {
 *     value : 必填 代表每个元素
 *     index : 可选 代表当前元素的index
 *     array : 可选 代表该数组
 * }
 *
 * @param thisArg (外部定义的变量)  可选
 * 可以被 callBackFn 内部调用
 *
 */
let filterNumbers = array.filter((v) => v > 1);
console.log(filterNumbers)

/**
 * reduce
 * previousValue:v1
 * currentValue:v2
 * initialValue: 初始值
 * 如果填了初始值 previousValue就是 初始值,currentValue就是index0的值
 * 如果没填初始值 previousValue就是 index0的值,currentValue就是index1的值
 */
console.log(array)
console.log("=====================")
let number = array.reduce((v1, v2) => {
    console.log(v1)
    console.log(v2)
    return v1 + v2
});
console.log(number)


let names = ['1', '2', '2', '3', '4'];

let nameNum = names.reduce((pre, cur) => {
    console.log(pre)
    console.log(cur)
    if (cur in pre) {
        pre[cur]++
    } else {
        pre[cur] = 1
    }
    return pre
}, {})
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}


/**
 * reduceRight  和reduce一样 只不过从右边开始
 */
console.log(array)
let numberRight = array.reduceRight((v1, v2) => {
    console.log(v1)
    console.log(v2)
    return v1 + v2
});
console.log(numberRight)




/**
 实际应用=============================================
 */

/**
* 1.统计学生同名人数。  下列返回 { tom: 2, jim: 1, jack: 2 }
* */

let student = ['tom', 'jim', 'jack', 'tom', 'jack'];

const countStudent = student.reduce((allStudent, name) => {
    console.log(allStudent)
    console.log(name)
    if (name in allStudent) {
        console.log(allStudent[name],"=======================")
        allStudent[name] ++;
    }
    else {
        allStudent[name] = 1;
    }
    return allStudent;
}, {});

console.log(countStudent)







