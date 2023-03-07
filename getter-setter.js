//abstract class
class Shape {
    constructor(side) {
        this.side = side;
        //make class abstract
        if (new.target == Shape)
            throw new Error("Abstract class can't be instatiate")
    }

    printName(name) {
        console.log(name);
    }
}

class Rect extends Shape {
    get area() {
        return this.side * this.side * this.side * this.side;
    }
}

class Circle extends Shape {
    get area() {
        return (this.side * this.side) * Math.PI;
    }
}

new Circle().printName("Hello");