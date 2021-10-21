let array = [
    {name: 'zs', age: 15, high: 180, classNo: '三年四班'},
    {name: 'ls', age: 11, high: 180, classNo: '三年四班'},
    {name: 'ws', age: 19, high: 180, classNo: '三年四班'},
    {name: 'zl', age: 13, high: 180, classNo: '三年四班'},
    {name: 'hq', age: 11, high: 180, classNo: '三年四班'}
]


/**
 * forEach
 */

console.log("forEach ========================================>>>")
array.forEach(v => {
    console.log(v)
})

/**
 * map
 */
console.log("map ========================================>>>")
let mapNumbers = array.map(v => v.name);

console.log(mapNumbers)

/**
 * filter
 */
console.log("filter ========================================>>>")
let filterNumbers = array.filter(v => v.age > 18);
console.log(filterNumbers)

/**
 * sort
 */
console.log("sort ========================================>>>")
let sortNumbers = array.sort((v1,v2) => {
    if(v2.age>v1.age){return 1}
    if(v2.age<v1.age){return -1}
    if(v2.age==v1.age){return 0}
});
console.log(sortNumbers)








/**
 * push  改变原有的array
 */
console.log("push ========================================>>>")
array.push("111");//就算push了不一样的类型 也不会报错
array.push({name: 'ad', age: 12, high: 180, classNo: '三年四班'});//就算push了不一样的类型 也不会报错
console.log(array)


