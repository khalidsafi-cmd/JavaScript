let lunches = [];

function addLunchToEnd (lunches, lunchItem){
    console.log(`${lunchItem} added to the end of the lunch menu.`);
  lunches.push(lunchItem);
  return lunches;
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(lunches, "Coffee"));

function addLunchToStart (lunches, lunchItem){
    console.log(`${lunchItem} added to the start of the lunch menu.`);
  lunches.unshift(lunchItem);
  return lunches;
}

console.log(addLunchToStart(lunches, "Tacos"));
console.log(addLunchToStart(lunches, "Tea"));

function removeLastLunch(lunches) {
  if (lunches.length > 0) {
    const removedLunch = lunches.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
    return lunches;
  }
}

console.log(removeLastLunch(lunches));
console.log(removeLastLunch(lunches));


function removeFirstLunch (lunches){
  if (lunches.length > 0){
    console.log(`${lunches[0]} removed from the start of the lunch menu.`);
  lunches.shift();
  return lunches;
  }
  else {
    console.log("No lunches to remove.");
    return lunches;
  }
};

// console.log(removeFirstLunch(lunches));

function getRandomLunch(lunches) {
  if (lunches.length > 0) {
    const randomIndex = Math.floor(Math.random() * lunches.length);
    const selectedLunch = lunches[randomIndex];
    console.log(`Randomly selected lunch: ${selectedLunch}`);
    return selectedLunch;
  } else {
    console.log("No lunches available.");
    return null;
  }
}

console.log(getRandomLunch(lunches));

function showLunchMenu (lunches){
     if (lunches.length > 0){
      console.log(`Menu items: ${lunches.join(", ")}`);
  return lunches;
  }
  else {
    console.log("The menu is empty.");
    return null;
  }
}

console.log(showLunchMenu(lunches));



