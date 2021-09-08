const girlFriends = ["王心怡", "阚清子"]
// 使用for...of遍历数组(打印的是键值)
for (let i of girlFriends) {
    console.log(i)
}
// 使用for...in遍历数组(打印的是索引)
for (let i in girlFriends) {
    console.log(i)
}

/*工作原理:
1.创建一个指针对象 指向当前数据结构的起始位置
2.第一次调用对象的next方法 指针自动指向数据结构的第一个成员
3.接下来不断调用next方法 指针一直向后移动 直到指向最后一个成员
4.每次调用next方法返回一个包含 value和done属性的对象  */
let iterator = girlFriends[Symbol.iterator]()
// 调用对象的next方法
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
