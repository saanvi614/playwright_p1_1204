export{}
let name="Swati"
console.log(name)
console.log(`Hello, ${name}!`)

let x: number = 10;
let name1: string = "Swati123";
let isActive: boolean = true;

let u: undefined = undefined;
let n: null = null;

let y;
console.log(y); // Output: undefined

let z=null;
console.log(z); // Output: null

let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number>=[6,7,8,9];
console.log(list1);
console.log(list2);

let tuple: [string, number];
tuple = ["Swati", 25];
console.log(tuple);
console.log(tuple[0].substring(1)); 

function hello()
{
    console.log("Hello, World!");
}
hello();

function sum(num1:number, num2:number) {
    return num1 + num2;
}
console.log(sum(5, 10));

interface Person {
    firstName: string;
    lastName: string;
    ID: number;
}

function displayPerson(person: Person) {
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.ID);
}

displayPerson({

    firstName: "Swati",
    lastName: "Kadam",
    ID: 12345
})

//classes
class Employee {
employeeName:string;

constructor(name: string) {
    this.employeeName = name;
}

hello(name:string)
{
    console.log(`Hello, ${name}!`);
}
}
let emp1 = new Employee("kadam");
emp1.hello("ssss");
