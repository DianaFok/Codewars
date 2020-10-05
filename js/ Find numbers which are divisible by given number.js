// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
// First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
  return numbers.filter(num => num % divisor === 0);
}

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
