//reduce- return single value
//map- return complete array
//filter- return fitlered array
//Foreach - return nothing

const users = [
    {
        name: "Bhavin",
        age: 21
    },
    {
        name: "Akash",
        age: 23
    },
    {
        name: "Vats",
        age: 21
    },
    {
        name: "Mihir",
        age: 18
    }
]
const arr = [1, 2, 3, 4, 5, 6];

//reduce on Object
var usrs = users.reduce((adults, curr) => {
    if (curr.age > 19) {
        adults.push(curr.name)
    }
    return adults;
}, [])

//Foreach on Object
var data = [];
users.forEach(element => {
    if (element.age > 19)
        data.push(element)
});

//Reduce on array 
var sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0)
console.log(sum);

//Map on array
var squares = arr.map((e) => e * e)
console.log(squares);

//Filter on array
var squares = arr.filter((e) => e < 3)
console.log(squares);