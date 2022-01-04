/**
 * Strong Password
 *
 * @description Return the minimum number of characters to make the password strong.
 *
 * @param {number} length Length of the password
 * @param {string} password The password to check
 * @returns {number} Minimum number of characters required for strong password
 */

function strongPasswordChecker(input) {
  // Make sure input is a string
  let password;

  if (typeof input === 'object' || !input) {
    password = '';
  } else if (typeof input !== 'string') {
    password = input.toString();
  } else {
    password = input;
  }

  // Return value
  let count = 0;

  // Set min, max and length of password
  const min = 6;
  const max = 20;
  let length = password.length;

  // Create the patterns to search number, upper case alphabet,
  // lower case alphabet and special character
  const digits = `0123456789`;
  const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
  const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  const specialCharacters = `!.`;

  const a = [...password].filter((char) => char === 'a').length;
  console.log(a);

  return count;
}

// Dev
(function () {
  let xnput = 'Flavio9!';
  let input = 'bbaaaaaaaaaaaaaaacccccc';
  let expected = 1;

  console.log(strongPasswordChecker(input)); // => 1
})();
