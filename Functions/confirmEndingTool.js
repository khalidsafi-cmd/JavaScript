function confirmEnding (text, wordToCheckAgainst){
  let wordlength = wordToCheckAgainst.length;
  let textEnding = text.slice(-wordlength);
  if( wordToCheckAgainst === textEnding){
    return true;
  }
  else {
    return false;
  }
}