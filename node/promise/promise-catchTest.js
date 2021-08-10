/**
 * catch 和 finally 都属于 语法糖
 * catch 属于 this.then(null, onRejection)
 * finally 属于 this.then(callback, callback);
 *
 */

let p = new Promise(function (resolve, reject) {
    reject('失败')
});

p.then(null, err => {
    throw Error('错误')  //console.log(Error('错误').toString())
})
    .then(null, err => {
        console.log(err + '自己的err') //走自己的（输出：Error: 错误自己的err）
        console.log(err + '自己的err') //走自己的（输出：Error: 错误自己的err）
        throw Error('错误自己抛出的')
    })
    .then(null, err => {
        console.log(err + '公共的err') //输出：Error: 错误自己抛出的公共的err
    })

