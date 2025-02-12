const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
   for (let i = 1; i < arr.length; i++)
      for (let j = 0; j < i; j++)
         if (arr[i] < arr[j] && arr[i] !== -1)
            [arr[i], arr[j]] = [arr[j], arr[i]]

   return arr
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}

module.exports = {
   sortByHeight
};