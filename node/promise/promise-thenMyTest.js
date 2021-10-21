/**
 *
 *
 * then方法提供一个供自定义的回调函数
 * 若传入非函数，则会忽略当前then方法。
 * 若传入函数回调函数中会把上一个then中返回的值当做参数值供当前then方法调用。
 * then方法执行完毕后需要返回一个新的值给下一个then调用（没有返回值默认使用undefined）。
 *
 * 每个then只可能使用前一个then的返回值。
 *
 */
//定义promise
let func = function () {
    return new Promise((resolve, reject) => {
        resolve('promise-resolve返回值');
    })
};

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
// func().then(()=>{
//     return '3333333'
// }).then(resp => {
//     console.warn(resp);
//     console.warn('4 =========<');
// });

func().then(()=>{
    sleep(5000)
    return '3333333'
}).then(() => {
    // return '4444444'
}).then(() => {
    return '5555555'
}).then(() => {
    return '6666666'
}).then((res) => {
    console.log(res)
    return '7777777'
})
