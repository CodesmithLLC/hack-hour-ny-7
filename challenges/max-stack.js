/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = (value) => {
  this.storage[this.index] = value;
  this.index+= 1;

  return this.storage;
}

Stack.prototype.pop = (value) => {
  let popstorage = this.storage[this.index-1];
  delete this.storage[this.index]
  this.index-= 1;

  return popstorage;
}

Stack.prototype.getMax = () => {
  let currentStore = this.storage[this.index];
  let compareArr = [];

  compareArr.push(currentStore);

  return Math.max(...compareArr)

}

module.exports = Stack;