// This series of katas will introduce you to basics of doing geometry with computers.
//
// Point objects have x and y attributes (X and Y in C#) attributes.
//
// Write a function calculating distance between Point a and Point b.
//
// Tests round answers to 6 decimal places.

//d=√((x_2-x_1)²+(y_2-y_1)²) = distance forumula 

function distanceBetweenPoints(a, b) {
  let forumula = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
  return Math.sqrt(forumula);
}
