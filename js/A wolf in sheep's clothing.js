// A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer,
//and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
//
// Warn the sheep in front of the wolf that it is about to be eaten.
//Remember that you are standing at the front of the queue which is at the end of the array:
//
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep".
//Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
//
// Note: there will always be exactly one wolf in the array.

//Return: specific element in array (if wolf is closest -> go away) OR (warn sheep),
//Parameters: array (queue)
//Examples:
function sheepFarmer(queue) {
  let {length} = queue;
  length--;
  if(queue[length] === 'wolf') return "Pls go away and stop eating my sheep";
  for(let i = length; i >= 0; i--){
    if(queue[i] === 'wolf'){
      return `Oi! Sheep number ${length-i}! You are about to be eaten by a wolf!`;
    }
  }
}
//Pseudocode: So I have an array of sheep, trying to find the location of the wolf and return (warning)
//depending on where the wolf is.
