//Parent class
function Person(name, address){
    this.name = name;
    this.address = address;
}

//Parent class methods
Person.prototype.getName = function () {
    console.log("Name is", this.name)
    return this.name;
} 
Person.prototype.getAddress = function () {
    console.log("Address is", this.add)
    return this.add;
} 

//Child class
function Student(...args) {
    //assign refrece to parent class 2 ways
    Person.call(this, args[0], args[1]);
    // Person.apply(this, [args[0], args[1]]);

    //extra property of student class
    this.program = args[2];
    this.fees = args[3];
}

//Prototype inherit from Person class
Student.prototype = Object.create(Person.prototype);

let student = new Student("Student 1", "Baroda","Information Technology", 89000);

console.log(student)