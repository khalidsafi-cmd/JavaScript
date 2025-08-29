const person = {
    firstName: "Khalid",
    lastName: "Safi",
    location: "Kabul, Afghanistan"
};


let {firstName: personName, lastName: personLastName} = person;

console.log(personName);
console.log(personLastName);
