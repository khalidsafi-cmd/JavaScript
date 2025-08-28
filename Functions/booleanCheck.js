function booWho(obj) {
  return typeof obj === "boolean";
}

console.log(booWho(true));     // true
console.log(booWho(false));    // true
console.log(booWho("true"));   // false
console.log(booWho(1));        // false
console.log(booWho(null));     // false
console.log(booWho([1, 2, 3])); // false
