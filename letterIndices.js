function letterIndices(string) {
  var result = {};
  for (i = 0; i < string.length; i++) {
    targetletter = string.charAt(i);
    result[targetletter] = result[targetletter] || [];
    result[targetletter].push(i);
  }
  if (result[" "]) {
    delete result[" "];
  }
  return result;
}




console.log(letterIndices("lighthouse in the house"));