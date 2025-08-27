function reverseString (word) {
    let charArray = word.split("");
    let  reverseArray = charArray.reverse();
    let reverseWord = reverseArray.join("");
    return reverseWord;
}

console.log(reverseString("Khalid"));