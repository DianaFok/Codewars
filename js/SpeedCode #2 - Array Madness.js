// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of
// each element in a is strictly greater than the sum of the cubes of each element in b.
//
// E.g.
//
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 **

function arrayMadness(a, b) {
  return a.reduce( (sum, el) => sum + el ** 2, 0) >
         b.reduce( (sum, el) => sum + el ** 3, 0);
}
