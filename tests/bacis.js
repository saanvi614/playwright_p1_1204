let name = "Swati";
console.log(name);
console.log(`Hello, ${name}!`);
let x = 10;
let name1 = "Swati123";
let isActive = true;
let u = undefined;
let n = null;
let y;
console.log(y); // Output: undefined
let z = null;
console.log(z); // Output: null
let list1 = [1, 2, 3, 4, 5];
let list2 = [6, 7, 8, 9];
console.log(list1);
console.log(list2);
let tuple;
tuple = ["Swati", 25];
console.log(tuple);
console.log(tuple[0].substring(1));
function hello() {
    console.log("Hello, World!");
}
hello();
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 10));
function displayPerson(person) {
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.ID);
}
displayPerson({
    firstName: "Swati",
    lastName: "Kadam",
    ID: 12345
});
//classes
class Employee {
    employeeName;
    constructor(name) {
        this.employeeName = name;
        console.log(`Employee created: ${this.employeeName}`);
    }
    hello(name) {
        console.log(`Hello, ${name}!`);
    }
}
let emp1 = new Employee("kadam");
console.log(`Employee name: ${emp1.employeeName}`);
emp1.hello("ssss");

