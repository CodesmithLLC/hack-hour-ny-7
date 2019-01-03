// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]
console.log('Hello from fizzbuzz');

function fizzbuzz(num) {
  let array = [];

  for (let i = 1; i <= num; i += 1) {
    if ( i % 3 === 0 && i % 5 === 0) {
      array.push('fizzbuzz');
      continue;
    }

    if ( i % 5 === 0) {
      array.push('buzz');
      continue;
    }

    if ( i % 3 === 0) {
      array.push('fizz');
      continue;
    }
    array.push(i);
  }
  return array;
}

console.log(fizzbuzz(16));

module.exports = {
  fizzbuzz
};
