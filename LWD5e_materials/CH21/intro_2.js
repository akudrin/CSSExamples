//accepts two arguments and returns the greater of the two values
function greatestOfTwo(first, second) {
  if (first > second) {
    return first;
  } else {
    return second;
  }
}
//returns the longest string in the array
var cars = ["Saab", "Volvo", "BMW"];
function longestWord(cars) {
  var longest = strings[0];
  for (i = 1; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}
