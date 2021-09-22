/**
 Date的练习集







 　  ·Date 　　　　　　｜　返回当日的日期和时间
     ·getFullYear　　　　｜　根据本地时间获取当前年份(四位数字)
     ·getMonth　　　　 　｜　从 Date 对象返回月份 (0 ~ 11)
 　　·getDate　　　　　　｜　从 Date 对象返回一个月中的某一天 (1 ~ 31)
 　　·getDay　　 　　　　｜　从 Date 对象返回一周中的某一天 (0 ~ 6)
 　　·getHours　　 　　　｜　根据本地时间获取当前小时数(24小时制,0-23)
 　　·getMinutes　　　 　｜　根据本地时间获取当前分钟数(0 ~ 59)
 　　·getSeconds　　　 　｜　根据本地时间获取当前秒数(0 ~ 59)
     ·getMilliseconds　　｜　根据本地时间获取当前毫秒数(0 ~ 999)
 　　·getTime　　　　　　｜　获取UTC(世界时间)格式的从1970.1.1 0:00以来的毫秒数
 　　·getTimezoneOffset　｜　获取当前时间和UTC格式的偏移值(以分钟为单位)
 　　·getUTCDate　　　　 ｜　获取UTC格式的当前日期(本月的几号)
 　　·getUTCDay　　　　　｜　获取UTC格式的今天是星期几(0 ~ 6)
 　　·getUTCFullYear　　 ｜　获取UTC格式的当前年份(四位数字)
 　　·getUTCHours　　　　｜　获取UTC格式的当前小时数(24小时制,0-23)
 　　·getUTCMilliseconds ｜　获取UTC格式的当前毫秒数
 　　·getUTCMinutes　　　｜　获取UTC格式的当前分钟数
 　　·getUTCMonth　　　　｜　获取UTC格式的当前月份(注意从0开始:0-Jan,1-Feb…)
 　　·getUTCSeconds　　　｜　获取UTC格式的当前秒数
 　　·getYear　　　　　　｜　根据本地时间获取当前缩写年份(当前年份减去1900)
 　　·setDate　　　　　　｜　设置当前日期(本月的几号)
 　　·setFullYear　　　　｜　设置当前年份(四位数字)
 　　·setHours　　　　　 ｜　设置当前小时数(24小时制,0-23)
 　　·setMilliseconds　　｜　设置当前毫秒数
 　　·setMinutes　　　　 ｜　设置当前分钟数
 　　·setMonth　　　　　 ｜　设置当前月份(注意从0开始:0-Jan,1-Feb…)
 　　·setSeconds　　　　 ｜　设置当前秒数
 　　·setTime　　　　　　｜　设置UTC格式的从1970.1.1 0:00以来的毫秒数
 　　·setUTCDate　　　　 ｜　设置UTC格式的当前日期(本月的几号)
 　　·setUTCFullYear　　 ｜　设置UTC格式的当前年份(四位数字)
 　　·setUTCHours　　　　｜　设置UTC格式的当前小时数(24小时制,0-23)
 　　·setUTCMilliseconds ｜　设置UTC格式的当前毫秒数
 　　·setUTCMinutes　　　｜　设置UTC格式的当前分钟数
 　　·setUTCMonth　　　　｜　设置UTC格式的当前月份(注意从0开始:0-Jan,1-Feb…)
 　　·setUTCSeconds　　　｜　设置UTC格式的当前秒数
 　　·setYear　　　　　　｜　设置当前缩写年份(当前年份减去1900)
 　　·toString　　　　　 ｜　将日期时间值转换成”日期/时间”形式的字符串值
 　　·Date.UTC　　　　　 ｜　返回指定的UTC格式日期时间的固定时间值

 */

let date = new Date()
console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())


const testDate = new Date();
// toString() 把 Date 对象转换为字符串。
const toString = testDate.toString();
console.log('toString ==> '+toString)
// toTimeString()  把 Date 对象的时间部分转换为字符串。
const toTimeString = testDate.toTimeString();
console.log('toTimeString ==> '+toTimeString)
// toDateString()  把 Date 对象的日期部分转换为字符串。
const toDateString = testDate.toDateString();
console.log('toDateString ==> '+toDateString)
// toUTCString()   根据世界时，把 Date 对象转换为字符串。
const toUTCString = testDate.toUTCString();
console.log('toUTCString ==> '+toUTCString)
// toLocaleString()  根据本地时间格式，把 Date 对象转换为字符串。  //?????? 不知道为什么在浏览器打印出来就是这个 2021/9/15 下午1:20:04
const toLocalString = testDate.toLocaleString();
console.log('toLocaleString ==> '+toLocalString)
// toLocaleTimeString()   根据本地时间格式，把 Date 对象的 '时间部分' 转换为字符串。
const toLocalTimeString = testDate.toLocaleTimeString();
console.log('toLocaleTimeString ==> '+toLocalTimeString)
// toLocaleDateString()   根据本地时间格式，把 Date 对象的 '日期部分' 转换为字符串。
const toLocaleDateString = testDate.toLocaleDateString();
console.log('toLocaleDateString ==> '+toLocaleDateString)
