function countingLetters(string) {
  var result = {};
  var stringnospaces = string.split(' ').join('')
  for (i = 0; i < stringnospaces.length; i++) {
    targetletter = stringnospaces.charAt(i);
    if (result[targetletter]) {
      result[targetletter] += 1
    } else {
      result[targetletter] = 1
    }
  }

  return result
}

