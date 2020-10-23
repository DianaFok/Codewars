// Create a function that alternates the case of a given string.
// Ex. HeLLo WoRLd => hEllO wOrlD
function alternateStr (str) {
  let newStr= '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toUpperCase() === str.charAt(i)) { //charAt() method returns the character at the specified index in a string.
      newStr += str.charAt(i).toLowerCase()
    }else{
      newStr += str.charAt(i).toUpperCase()
    }
  }
  return newStr
}
console.log(alternateStr('HeLLo WoRLd'))
