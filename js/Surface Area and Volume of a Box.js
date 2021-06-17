// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  let x = (2 * depth * width) + (2 *depth * height) + (2 * height * width); //SA=2lw+2lh+2hw
  let y = (width * height * depth); //V = l x w x h
  return [x, y]
}
