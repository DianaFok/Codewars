// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
//
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possiblites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
//
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

function solve(arr) {
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(new Set(arr[i]).size);
  }
  return lengths.reduce((acc, cur) => {
    return acc * cur
  });
};

//OR

function solve(arr) {
    let result = 1;
    for(let i=0; i<arr.length; i++){
      result *= arr[i].sort().filter((current, index)=> current !== arr[i][index+1]).length;
    }
    return result;
};

//OR

function solve(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    resultArr.push(new Set(arr[i]).size);
  }

  return resultArr.reduce(function(prev, curr) {
    return prev * curr;
  }, 1);
};
