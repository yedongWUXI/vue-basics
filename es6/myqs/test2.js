/*
*   解构赋值浅拷贝的危害
*
*
*
* */
//模拟页面的表单录入
const addForm = {
    name: '赵本山',
    age: '不详',
    sex: '男'
}

//模拟保存的方法
const save = () => {
    let data = addForm;    //这样赋值就会出现浅拷贝的问题
    // let data = JSON.parse(JSON.stringify(addForm))   //使用重新new一个对象 来解决浅拷贝
    data.sex = addForm.sex == '男' ? '0' : '1'
    console.log("data:",data)
    //这里把data传给接口
}


//第一次调用保存,未通过后台校验
save()
//第二次调用保存,未通过后台校验
save()
//第三次调用保存,保存成功  (这里出现了问题：sex就变成了1(女),和表单录入里的不一样)
save()

