/**
*
* 把ts文件编译成js
 *
 * 命令行：          tsc test.ts
 * 保持监听：        tsc test.ts -w
 *
 * 学习视频地址： https://www.bilibili.com/video/BV1Xy4y1v7S2
 *
* */


console.log(222222)


let a: number

a = 8;

console.log(a+9)


function f(a,b:number) {
    console.log(a+b)
}

f(a,3)
