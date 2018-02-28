function sum (arg) {
    let acc = 0;

    function iternalSum (arg) {
        if (arg != null) {
    
            const newSum = iternalSum;
            acc += arg;
    
        return newSum;
    }
        else {
        return acc;
        }
    }

    if (arg != null) {

        const newSum = iternalSum;
            acc = arg;

    return newSum;
}
    else {
        return acc;
    }
}

console.log(sum(1)(2)(3)(4)());

function create(proto){
    const obj = new Object;
    obj.__proto__= proto;

    return obj;
}

console.log(create(Boolean));


const getPromise = function(number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 100, number);
      })
}

const promiseReduce = async (mass, fun, acc) => {
        for (let element of mass) {
            acc = fun(acc, await element)
        }

    return acc;
}

promiseReduce([getPromise(-1), getPromise(-2) ,getPromise(-3), getPromise(-4)], (n,m) => n + m, 0).then((result) =>{
    console.log(result);
})