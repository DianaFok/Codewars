// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer


function squareDigits(num){
  let string = num.toString(); //makes number into string
  let results = []; //empty array
  for (let i = 0; i < string.length; i++) { //loop that iterates all stringed numbers
    results[i] = Math.pow(string[i], 2) //Math.pow() is how to square
  }
  return Number(results.join('')); //Number() is turning string back into numbers
}
