// (function () {

//     // abstract class
//     class Person {
//         constructor(name, gender) {

//             //condition to make abstract
//             if (new.target == Person)
//                 throw new Error("Abstract class can't be Instantiate")
//             this.name = name
//             this.gender = gender
//         }

//         getDetail() {
//             console.log(this.name, "\'s gender is", this.gender);
//         }
//     }

//     class Student extends Person {
//         constructor(name, gender, age, dept) {
//             super(name, gender);
//             this.age = age;
//             this.dept = dept;
//         }
//     }

//     var student = new Student("Bhavin", "male", 21, "Information Technolgoy")
//     student.getDetail()
// })();
//IIFE Syntax