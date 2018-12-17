/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    //3+7, 3+4, 3+2
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

//*********************************fellow solution *********************************
function subsetSum(array, target) {
  const sets = powerSet(array);

  return sets.reduce(
    (accum, set) => accum || target === set.reduce((sum, num) => sum + num, 0),
    false
  );
}

function powerSet(array) {
  if (array.length === 0) return [
    []
  ];

  const left = powerSet(array.slice(1));
  const right = left.map(e => e.concat(array[0]));

  return left.concat(right);
}
//*********************************fellow solution 2*********************************
function subsetSum(array, target) {
  if (!target) return true;
  if (!array.length) return false;
  
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}

console.log(subsetSum([3, 7, 4, 2], 5)) // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)) // -> false
console.log(subsetSum([8, -2, 1, -3], 6)) // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;