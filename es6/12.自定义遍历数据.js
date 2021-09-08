const girls = {
    name: "so many",
    people: [
        "王心怡",
        "阚清子",
        "啦啦啦"
    ],

    [Symbol.iterator]() {

        let index = 0;
        let _this = this
        return {
            next: function () {
                if (index < _this.people.length) {

                    const result = {
                        value: "zhangtong" + "-" + _this.people[index],

                        done: false
                    }
                    index++
                    return result
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }

            }
        }
    }
}

// 遍历对象 使用for of
for (let i of girls) {
    console.log(i)
}


