let lunches = [];

function addLunchToEnd(lunches, lunchItem){
    lunches.push(lunchItem);
    return lunchItem;
};

function addLunchToStart(lunches, lunchItem){
    lunches.unshift(lunchItem);
    return lunchItem;
}

const lunchItem = "Pizza";
const addedItem = addLunchToEnd(lunches, lunchItem);

console.log(addedItem);


