
//Rest arg must last one argument

function sum(...args) {
    return args.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0)
}

console.log(sum(1, 2, 3, 4, 5));

// const arr = [1, 2, 3, 4, 5, 6]
// const [, , , , ...arr2] = arr
// console.log(arr2)