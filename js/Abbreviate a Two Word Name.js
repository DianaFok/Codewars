// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
// 
// Patrick Feeney => P.F

function abbrevName(name){
  let nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){
    let name = name.toUpperCase().split(' ');
    return name[0][0] + '.' + name[1][0];
}

const abbrevName = name =>
  name
    .split` `
    .map(part => part[0].toUpperCase())
    .join('.')
