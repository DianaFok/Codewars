// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
//
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]


//given an integer
//return an array of ascending length subarrays
//push() method adds new items to the end of an array, and returns the new length.
//loop

function pyramid(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      arr.push(1);
    }
    result.push(arr);
  }
  return result;
}
