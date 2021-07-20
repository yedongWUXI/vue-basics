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
 * splice 和 slice的区别
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
console.log(array.indexOf(5,1))

//lastIndexOf
//如果不指定 默认从最后一个开始
console.log(array.lastIndexOf(5))










