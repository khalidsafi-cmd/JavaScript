let fruits = ["apple", "Banana", "Ornage", "mango", "kiwi"];

let [first, second, third] = fruits;


console.log(first);
console.log(second);
console.log(third);

let [one, two, ...rest] = fruits;

console.log(one);
console.log(two);
console.log(rest);