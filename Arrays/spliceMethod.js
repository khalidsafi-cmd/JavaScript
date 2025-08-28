// This method is for adding or remove elemnets in an array and it mutates the original array

// basic syntax

// array.splice(startIndex, itemsToRemove, item1, item2);


let fruitsOriginal = ["apple", "banana", "ornage", "mango", "kiwi"];
let fruitsCopy = [...fruitsOriginal];

let removed = fruitsCopy.splice(2,2);

console.log(fruitsOriginal);

console.log(fruitsCopy);
console.log(removed);

let colors = ["red", "green", "blue"];

colors.splice(1, 0, "yellow", "purple");

console.log(colors);

let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]

let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []