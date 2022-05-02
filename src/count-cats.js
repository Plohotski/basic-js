const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(/*matrix*/) {
   let noCats = 0;
   for (const item of arguments[0]) {
      for (const i of item)
         if (i === '^^')
            noCats++
   }
   return noCats

   throw new NotImplementedError('Not implemented');
}


module.exports = {
   countCats
};
