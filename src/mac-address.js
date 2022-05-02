const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
   if (n.length !== 17)
      return false
   for (let i = 0; i < 17; i++) {
      if (i % 3 === 2)
         if (n[i] !== '-')
            return false
         else
            break
      if (!((n[i] >= '0' && n[i] <= '9') || (n[i] >= 'A' && n[i] <= 'F')))
         return false
   }
   return true
   throw new NotImplementedError('Not implemented');
   throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here
}
module.exports = {
   isMAC48Address
};
