// === Chapter 8 Recursion and Dynamic Programming ===

/*
    Paint Fill:  Implement the "paint fill" function that one might see on many image editing programs. 
    That is, given a screen (represented by a two-dimensional array of colors), a point, and a new color, 
    fill in the surrounding area until the color changes from the original color.
*/

// My Implementation
const fill = (screen, point, color, original = screen[point[0]][point[1]]) => {
  if (original === color) return screen;

  // row and column
  let r = point[0],
    c = point[1];

  //stop the function if the pixel is offscreen or is not the orignal color to be changed
  if (
    typeof screen[r] === 'undefined' ||
    typeof screen[r][c] === 'undefined' ||
    screen[r][c] !== original
  )
    return;

  // change the color of the current pixel, and try to fill in adjacent pixels
  screen[r][c] = color;
  fill(screen, [r - 1, c], color, original);
  fill(screen, [r + 1, c], color, original);
  fill(screen, [r, c - 1], color, original);
  fill(screen, [r, c + 1], color, original);

  return screen;
};

// test
let screen = [
  [1, 1, 1, 0, 1],
  [1, 0, 2, 0, 1],
  [0, 0, 0, 0, 1],
  [1, 3, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

console.log(fill(screen, [2, 2], 1));
