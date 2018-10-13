/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  if(binary === '0'){return 0}
  const array = binary.split('').reverse();
  let result = 0;
  console.log(array);
  for(let i = 0; i < array.length; i++){
    if(array[i] === '0'){
      continue;
    }
    
    result = result + Math.pow(2, i);  
  }
  return result;
}

console.log(binToDec('0'));//0
console.log(binToDec('11'));//3
console.log(binToDec('100'));//4
console.log(binToDec('101'));//5
console.log(binToDec('0101'));//5

module.exports = binToDec;
