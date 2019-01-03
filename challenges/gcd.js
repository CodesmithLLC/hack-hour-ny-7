/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if(a === b) return a;
  let start = Math.floor(Math.max(a,b)/2)
  for(i = start; i > 0; i--) {
    if(a%i === 0 && b%i === 0) return i;
  }
  return 0;
}

module.exports = gcd;