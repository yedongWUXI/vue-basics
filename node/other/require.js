/**
 * 如果要运行成功下面这个代码  就需要
 * npm install qs
 * npm install lodash
 *
 * 注：require 会一层一层的往上找node-module 找到后再定位到相对应的js
 *
 *
 */


var qs=require('qs');
var merge=require('lodash/merge');

let adornData = (data = {}, openDefultdata = true, contentType = 'json') => {
    var defaults = {
        't': new Date().getTime()
    }
    data = openDefultdata ? merge(defaults, data) : data
    return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}


let adornParams = (params = {}, openDefultParams = true) => {
    var defaults = {
        't': new Date().getTime()
    }
    return openDefultParams ? merge(defaults, params) : params
}



console.log(adornData({"name":"zs"},true))
console.log(adornData({"name":"zs"},false))
console.log(adornData({"name":"zs"},false,false))
console.log(adornData("07bc8a092baa044f49ee6c31c6e6f3f0",false))
console.log(adornData("1",false))





console.log(adornParams({'id':'1111'},false))
console.log(adornParams({'id':'1111'},true))






