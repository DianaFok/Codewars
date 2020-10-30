// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is
//to convert that string to either lowercase only or uppercase only based on:
//
// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
//
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}

//? = if/else statement
//return lowerC greater than = to if upperC

function solve(s){
  //string -> array
 let array = s.split('')
  //filter by upperCase
 let upperCaseArray = array.filter(letter => letter === letter.toUpperCase())
 //filter by lowerCase
 let lowerCaseArray = array.filter(letter => letter === letter.toLowerCase())
 console.log(upperCaseArray,lowerCaseArray)
  //if (array has more upperCase).join()
        //string.toUpperCase
  //if (String has more lowerCase)
        //string.toLowerCase
  if(upperCaseArray.length !== lowerCaseArray.length && upperCaseArray.length > lowerCaseArray.length){
    return array.join('').toUpperCase()
  } else {
    return array.join('').toLowerCase()
  }
}

const upper = s.split('').filter(item=> item === item.toUpperCase() ).length;
return (upper > s.length/2) ? s.toUpperCase() : s.toLowerCase()
