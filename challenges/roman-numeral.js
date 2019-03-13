/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeralLong(n) {
  let num = n;
  let output = [];
  if (num >= 1000) {
    let m = Math.floor(num / 1000);
    for (let i = 0; i < m; i++) {
      output.push('M')
    }
    num = Number(num.toString().split('').slice(-3).join(''));
  }

  if (num >= 500) {
    let d = Math.floor(num / 100);
    if (d === 9) { 
      output.push('CM');
      num = Number(num.toString().split('').slice(-2).join(''));
    }
    else {
      output.push('D')
      num = num - 500;
    }
  }

  if (num >= 100) {
    let c = Math.floor(num / 100);
    if (c === 4) {output.push('CD')}
    else {
      for (let i = 0; i < c; i++) {
        output.push('C');
      }
    }
    num = Number(num.toString().split('').slice(-2).join(''));
  }

  if (num >= 50) {
    let l = Math.floor(num / 10);
    if (l === 9) { 
      output.push('XC')
      num = Number(num.toString().split('').slice(-1).join(''));
    }
    else { 
      output.push('L') 
      num = num - 50;
    };
  }

  if (num >=10) {
    let x = Math.floor(num / 10);
    if (x === 4) { output.push('XL') }
    else {
      for (let i = 0; i < x; i++) {
        output.push('X');
        num = num - 10
      }
      console.log(num)
    }
    num = Number(num.toString().split('').slice(-1).join(''));
  }

  if (num >= 5) {
    if (num === 9) {
      output.push('IX')
    } else {
      output.push('V')
      num = num - 5;
      for (let i = 0; i < num; i++) {
        output.push('I')
      }
    }
  } else {
    if (num === 4) { output.push('IV')}
    else {
      for (let i = 0; i < num; i++) {
        output.push('I')
      }
    }
  }
  return output.join('');
}

function fromRoman(rom){
  let output = 0;
  let arr = rom.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'C' && arr[i+1] === 'M') {
      output += 900;
      i+=2;
    }
    if (arr[i] === 'M') { output += 1000};
    if (arr[i] === 'C' && arr[i+1] === 'D') {
      output += 400;
      i+=2;
    }
    if (arr[i] === 'D') { output += 500}
    if (arr[i] === 'X' && arr[i+1] === 'C') {
      output += 90;
      i+=2;
    }
    if (arr[i] === 'C') { output += 100}
    if (arr[i] === 'X' && arr[i+1] === 'L') {
      output += 40;
      i+=2;
    }
    if (arr[i] === 'L') { output += 50 };
    if (arr[i] === 'I' && arr[i+1] === 'X') {
      output+=9;
      i+=2;
    }
    if(arr[i] === 'X') { output += 10 }
    if(arr[i] === 'I' && arr[i+1] === 'V') { 
      output+=4;
      i+=2;
    }
    if(arr[i] === 'V') { output+= 5 }
    if(arr[i] === 'I') { output+= 1 }
  }
  return output;
}

function romanNumeral(n) {
  const map = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'],
    [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];

  let value = '';
  for (let i = 0; n > 0 && i < map.length; i++) {
    while (n >= map[i][0]) {
      value += map[i][1];
      n -= map[i][0];
    }
  }
  return value;
}

console.log(fromRoman('MDCLXIX'));


console.log(romanNumeral(14));

module.exports = romanNumeral;
