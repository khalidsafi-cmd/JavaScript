function reverseString (wordToReverse){
  let charArray = wordToReverse.split("");
  let reverseArray = charArray.reverse();
  let reverseWord = reverseArray.join("");
  return reverseWord;
}

console.log(reverseString("hello"));