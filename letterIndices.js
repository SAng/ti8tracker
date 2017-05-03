function letterIndices(string) {
  var result = {};
  var stringnospaces = string
  for (i = 0; i < stringnospaces.length; i++) {
    targetletter = stringnospaces.charAt(i);
    if (result[targetletter]) {
      result[targetletter].push(i)
    } else {
      result[targetletter] = [i]
    }
  }
  if (result[" "]) {
    delete result[" "]
  }
  return result
}

