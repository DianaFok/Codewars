// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
//
// Example: (Input1, Input2 -->Output)
//
// "4",  "5" --> "9"
// "34", "5" --> "39"

function sumStr(a,b) {
  let sum = (+a) + (+b)
  return sum + ''
}

//+a and +b = the unary plus operator forces an eventual string to be treated as number
