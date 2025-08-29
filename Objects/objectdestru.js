
const person = {
    firstName: "Khalid",
    lastName: "Safi",
    location: "Kabul, Afghanistan"
};


let {firstName: personName, lastName: personLastName} = person;

console.log(personName);
console.log(personLastName);


let name = "Bob";
let age = 35;

let person1 = {name, age};

console.log(person1);


function createPerson(name, age) {
  return { name, age };
}

let person2 = createPerson("Charlie", 35);
console.log(person); // { name: "Charlie", age: 35 }