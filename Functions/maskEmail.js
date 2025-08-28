let email = "khalidsafi031@gmail.com";

function maskEmail (email) {
  let theIndexAt = email.indexOf("@");
  let userName = email.slice(0 , theIndexAt);
  let domain = email.slice(theIndexAt);

  let staricRepeat = "*".repeat(userName.length - 2);

  let firstPart = email.slice(0 , 1);
  let middlePart = staricRepeat;
  let lastPart = email.slice(theIndexAt - 1, theIndexAt);

  return firstPart + middlePart + lastPart + domain;  
}

console.log(maskEmail("apple.pie@example.com"));

console.log(maskEmail(email));
