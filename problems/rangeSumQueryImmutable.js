/**
 * @param {number[]} nums
 */

// ! this is a constructor function, it should be a Class, Im not quite comfortable with Class and stuff, I should get back to this

export var NumArray = function (nums) {
  this.arr = nums;
  for (let i = 1; i < nums.length; i++) {
    this.arr[i] += this.arr[i - 1];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left == 0) return this.arr[right];
  return this.arr[right] - this.arr[left - 1];
};
