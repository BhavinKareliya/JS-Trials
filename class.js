class Person {
    constructor(name, address) {
        this.name = name;
        this.add = address;
    }

    getName() {
        console.log("Name is ", this.name)
        return this.name;
    }

    static getAddress() {
        console.log("Address is ", this.add)
        return this.add;
    }
}

class Student extends Person {
    static fee;
    constructor(name, add, program, year, fee) {
        super(name, add);
        this.program = program;
        this.year = year;
    }

    getProgram() {
        console.log("Program name is ", this.program)
        return this.program;
    }

    static getFee() {
        console.log("Fees is ", this.fee)
        return this.fee;
    }
}

let student = new Student("Bhavin", "Ahmedabad", "Information Technology", 2020);
Student.fee = 5000;
console.log(Student.getFee())