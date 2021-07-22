/**
 *
 * Promise.then
 *
 * onfulfilled
 *
 */

// let p = new Promise(function (resolve, reject) {
//     //做一些异步操作
//     setTimeout(function () {
//         console.log('执行完成Promise');
//         resolve('要返回的数据可以任何数据例如接口返回数据');
//     }, 2000);
// });
//

// // resolve代表成功 reject失败 都是一个函数
//
// let p1 = new Promise(function (resolve, reject) {
//
//     // resolve('成功')  //状态由等待变为成功，传的参数作为then函数中成功函数的实参
//
//     reject('失败')  //状态由等待变为失败，传的参数作为then函数中失败函数的实参
//
// })
//
// //then中有2个参数，第一个参数是状态变为成功后应该执行的回调函数，第二个参数是状态变为失败后应该执行的回调函数。
//
// p1.then((data) => {
//
//     console.log('成功' + data)
//
// }, (err) => {
//
//     console.log('失败' + err)
//
// })


let p = new Promise(function (resolve, reject) {
    reject('失败1')
})

p.then((data) => {
    console.log('成功' + data)
}, (err) => {
    console.log('失败' + err) //失败失败1
})
    .then((data) => {
        console.log('成功1' + data) //成功1undefined
    }, (err) => {
        console.log('失败1' + err)
    })

//
// let p = new Promise(function (resolve, reject) {
//     reject('失败1')
// })
//
// p.then((data) => {
//     console.log('成功' + data)
// }, (err) => {
//     console.log('失败' + err) //失败失败1
// })
//     .then((data) => {
//         console.log('成功1' + data) //成功1undefined
//         throw Error('下一个失败')
//     }, (err) => {
//         console.log('失败1' + err)
//     })
//     .then((data) => {
//         console.log('成功2' + data)
//     }, (err) => {
//         console.log('失败2' + err) //失败2Error: 下一个失败
//     })


let p11 = new Promise(error => {
    error('失败1')
})


function checkItem(v) {
    return v >= 1;
}


let p11 = new Promise((resolve, reject) => {
}).then((v1, v2) => {
})



