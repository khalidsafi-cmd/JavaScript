function truncateString (text, lengthToCut){
  if(text.length > lengthToCut){
    return text.slice(0, lengthToCut) + "...";
  }
  else {
    return text;
  }
}