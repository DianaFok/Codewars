// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
// Examples
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
//
// // returns 'www.codewars.com?page=1'
// removeUrlAnchor('www.codewars.com?page=1')

//given a string (url)
//return string with certain things removed
//remove the # symbol and anything after that
//split method, for loop, splice method, join method
//splice() method adds/removes items to/from an array, and returns the removed item(s).

function removeUrlAnchor(url){
  let arr = url.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '#') {
      arr.splice(i, arr.length - 1)
    }
  }
  return arr.join('');
}
