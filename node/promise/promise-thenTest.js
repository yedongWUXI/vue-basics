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

/**
 * 函数加括号实际上等于函数的返回值。就是说，只要加括号的，就代表将会执行函数体代码。
 * 不加括号的，都是把函数名称作为函数的指针，用于传参，此时不是得到函数的结果，因为不会运行函数体代码。它只是传递了函数体所在的地址位置，在需要的时候好找到函数体去执行。
 */
//定义函数
let cb = function () {
    return '新的值';
}


//测试开始======================


// 第一个then传入函数 ,第二个then的入参就是前一个then的返回值
func().then(function () {
    return cb();
}).then(resp => {
    console.warn(resp);
    console.warn('1 =========<');
});

// 第一个then传入函数 但没有返回值,第二个then的入参就是undefined
func().then(function () {
    cb();
}).then(resp => {
    console.warn(resp);
    console.warn('2 =========<');
});

// 第一个then传入非函数 则会忽略第一个then,第二个then使用的入参就是func()也就是定义的promise里的返回值''
func().then(cb()).then(resp => {
    console.warn(resp);
    console.warn('3 =========<');
});

// 和1类似
func().then(cb).then(resp => {
    console.warn(resp);
    console.warn('4 =========<');
});
