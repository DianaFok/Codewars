// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index.
// If there is no such index, return -1. If there is more than one such index, return the left-most index.
//
// For example:
//
// peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
// peak([1,12,3,3,6,3,1]) = 2
// peak([10,20,30,40]) = -1

function peak(arr){
 //..
  let peak;
  arr.forEach( (num, i)=>{
    if( i > 0 && i < arr.length-1 ){
      //contains element 0 until i-1
      let leftArr = arr.slice( 0, i).reduce((a,c)=>a+c)
      // contains element i+2 until the last element in the array (arr.length-1)
      let rightArr = arr.slice( i+1, arr.length ).reduce((a,c)=>a+c)
      if(leftArr === rightArr){ peak = i}
    }
  })
  return (peak) ? peak : -1 ;
}
