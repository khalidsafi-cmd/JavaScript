// shallow copies of arrays used to modify arrays and not modifying the original array

let originalArray = [1, 2, 3];

let copyArray = [].concat(originalArray);


console.log(copyArray);


let copyArr = originalArray.slice();

console.log(copyArr);


let copyarray = [...originalArray];


console.log(copyarray);



// All of these methods create new arrays that you can modify and manipulate

// copyarray.push(4,5);
// console.log(copyarray);

// let number = "khalid";
// console.log(number.toUp());
