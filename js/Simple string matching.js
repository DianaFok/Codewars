// You will be given two strings a and b consisting of lower case letters, but a will have at most one asterix character.
// The asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters.
// No other character of string a can be replaced. If it is possible to replace the asterix in a to obtain string b,
// then string b matches the pattern.
//
// If the string matches, return true else false.
//
// For example:
// solve("code*s","codewars") = true, because we can replace the asterix(*) with "war" to match the second string.
// solve("codewar*s","codewars") = true, because we can replace the asterix(*) with "" to match the second string.
// solve("codewars","codewars") = true, because the strings already match.
// solve("a","b") = false
// solve("*", "codewars") = true

// P: two strings a and b consisting of lower case letters, but a will have at most one asterix character.
// R: asterix (if any) can be replaced with an arbitrary sequence (possibly empty) of lowercase letters. If the string matches, return true else false.

// E:
function solve(a,b){
  starIndex = a.indexOf('*')
  if (starIndex === -1) { // no asterix in string a
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  // asterix in string a
  if (a.substring(0,starIndex) === b.substring(0, starIndex)){
    if (a.length > b.length + 1) {return false}
    if (b.substring(b.length - a.substring(starIndex+1).length).indexOf(a.substring(starIndex+1)) !== -1){
        return true
    } else {
      if (a.substring(0, starIndex) + b.substring(starIndex) + a.substring(starIndex+1) === b) {
        return true
      } else {
        return false
      }
    }
  } else { //substrings up to the * do not match
    return false;
  }

}
// P:
