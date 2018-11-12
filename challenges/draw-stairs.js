/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  for (let i = 1; i <= n; i++) {
    let string = '';
    for (let k = 0; k < n - i; k++) {
      string += ' ';
    }
    for (let p = 0; p < i; p++) {
      string += '*'
    }
    console.log(string);
  }
}

function drawStairs(n) {
  for (var i = 1; i <= n; i++) {
    var spaces = ' '.repeat(n - i);
    var splats = '*'.repeat(i);
    console.log(spaces + splats);
  }
}



module.exports = drawStairs;
