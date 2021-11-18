// const person = {
//     firstName: 'Edvardas',
//     lastName: 'Salnis',
//     address: {
//         street:'Vilniaus g.'
//     },
//     getFullName() {
//         return `Hello my name is ${this.firstName} ${this.lastName}`;
//     }
// }

// //Constructors
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function()
//     {
//         return `Hello my name is ${this.firstName} ${this.lastName}`;
//     }
// }
// Person.prototype.getFullName = function () {
//     return `Hello my name is ${this.firstName} ${this.lastName}`;

// }
// function PersonInfo(firstName, lastName, age) {
//     Person.call(this, firstName, lastName)
//     this.age = age
// }
// PersonInfo.prototype = Object.create(Person.prototype)
// const person1 = new PersonInfo('Edvardas', 'Salnis', 24);
// console.log(person1.getFullName())
// const person1 = new Person('Edvardas', 'Salnis')
// const person2 = new Person('Jonas', 'Jonaitis')
// const person3 = new Person('Petras', 'Petraitis')
// console.log(person1)
// console.log(person1.firstName)
// console.log(person2.lastName)
// console.log(person3.getFullName())

// console.log(person["firstName"]);
// const { firstName, lastName } = person;
// const { address: {street } } = person;
// console.log(Object.values(person))


////////////////////////////////////

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     getFullName() {
//         return `Hello, my name is ${this.firstName} ${this.lastName}`
//     }
//     getFirstName() {
//         return `${this.firstName}`
//     }
// } // Prototype.
// const person = new Person('Edvardas', 'Salnis');

// console.log(person.getFirstName());
// // Jei norime prideti dar viena reiksme
// class PersonInfo extends Person {  
//     constructor(firstName, lastName, age) { 
//         super(firstName, lastName) 
//         this.age = age;
//     }
// }

// const personInfo = new PersonInfo('Jonas', 'Jonaitis', 14);
// console.log(personInfo)

// Type scriptas.

