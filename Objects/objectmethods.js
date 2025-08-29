const person = {
    firstName : "bob",
    age: 30,
    sayHello: function(){
        return "Hello your name is, " + this.firstName + "and your age is " + this.age +".";
    }
};

console.log(person.sayHello());