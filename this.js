class Names {
    constructor(name) {
        this.name = name
    }
    data() {
        //this refers to none
        return function () {
            console.log(this);
        }
    }

    data1() {
        //this refer to Names class (Use of arrow function)
        return () => console.log(this);
    }
}

let names = new Names("Akash");
names.data()()
names.data1()()