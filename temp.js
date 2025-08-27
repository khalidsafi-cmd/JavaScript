booWho(false);

function booWho(obj) {
  if (typeof obj === "boolean"){
    return console.log(true);
  }
  else {
    return console.log(false);
  }
}