/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let currInner;
  let currMax = Math.min(...arr);
  console.log(currMax);
  for (let k = 0; k < arr.length; k++) {
    currInner = 0;
    for (let i = k; i < arr.length; i++) {
      currInner += arr[i];
      if (currInner > currMax) {
        currMax = currInner;
      }
    }

  }
  return currMax;
}

module.exports = maxSubarray;
