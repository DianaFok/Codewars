// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//create a function that passess in string & ending
//set a variable with the length of ending
//substr() method extracts parts of a string, beginning at the character at the specified position,
//and returns the specified number of characters.
//parameters = start, length
//if statement

function solution(str, ending){
  let newEnding = ending.length;
  let newStr = str.substr(str.length - newEnding);
  if (ending === newStr) {
    return true;
  }
  return false;
}
