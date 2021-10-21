let names = ['tom', 'jim', 'jack', 'tom', 'jack'];

const countNames = names.reduce((allNames, name) => {
    console.log(allNames)
    console.log(name)
    if (name in allNames) {
        allNames[name] ++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});

console.log(countNames)  // { tom: 2, jim: 1, jack: 2 }
