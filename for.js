var obj = [
    {
        name: 'Bhavin',
        age: 21,
        gender: 'Male'
    },
    {
        name: 'Jil',
        age: 21,
        gender: 'Male'
    },
    {
        name: 'Vipul',
        age: 22,
        gender: 'Male'
    },
    {
        name: 'Abhi',
        age: 23,
        gender: 'Male'
    }
]

//in:: provide index
for (var i in obj) {
    console.log(obj[i])
}

//of:: provide single object
for (var i of obj) {
    console.log(i)
}