// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to milliseconds.

// P: hours, minutes, and seconds AFTER midnight
// R: return time which is then converted to milliseconds (100's)
// E:
function past(h, m, s){
  var miliseconds = 0;
  miliseconds = miliseconds + s * 1000;
  miliseconds = miliseconds + m * 60000;
  miliseconds = miliseconds + h * 3600000;
  return miliseconds;
}
// P:
