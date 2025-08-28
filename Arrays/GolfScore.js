const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore (par, numberOfStrokes) {
  if (numberOfStrokes === 1 ){
    return names[0];
  }
  else if (numberOfStrokes <= par - 2 ){
    return names[1];
  }
    else if (numberOfStrokes <= par - 1 ){
    return names[2];
  }
    else if (numberOfStrokes === par ){
    return names[3];
  }
    else if (numberOfStrokes === par + 1 ){
    return names[4];
  }
    else if (numberOfStrokes === par + 2 ){
    return names[5];
  }  else if (numberOfStrokes >= par + 3 ){
    return names[6];
  }
}

console.log(golfScore(5,2));