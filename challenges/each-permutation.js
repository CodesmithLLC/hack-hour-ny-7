/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/


// Backtracking & Decrease and Conquer O(n!)
function eachPermutation(array, callback) {
  // * return function with argument as 0 to act as index 
  return permute(0);

  function permute(element) {
    // * we use element for the value of i and this is where it well start 
    for (let i = element; i < array.length; i++) {
      swap(array, i, element);
      permute(element + 1);
      swap(array, element, i);
    }

    if (element === array.length - 1) {
      callback(array);
    }
  }

  function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
}

console.log(eachPermutation([1, 2, 3], function(perm) {
  console.log('PERM: ', perm)
}));

module.exports = eachPermutation;
