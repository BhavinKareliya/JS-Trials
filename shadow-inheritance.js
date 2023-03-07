class Vehical {
    constructor(name, modelYear) {
        this.name = name;
        this.modelYear = modelYear;
    }

    getDetail() {
        console.log(this.name + " car from year " + this.modelYear);
    }
}

class Fourwheels extends Vehical {
    constructor(name, modelYear, capacity) {
        super(name, modelYear);
        this.age = new Date().getFullYear() - modelYear;
        this.capacity = capacity;
    }

    //Shadowing
    getDetail() {
        console.log(this.name, " is car with an old age of ", this.age, " year and capacity of ", this.capacity, " persons");
    }
}

var mahindra = new Fourwheels("Thar", 2000, 4)

mahindra.getDetail();