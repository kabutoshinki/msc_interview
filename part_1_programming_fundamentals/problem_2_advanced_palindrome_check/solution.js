// Normalize the string to remove accents.
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Remove non-alphanumeric characters and convert to lowercase.
function cleanString(str) {
  return normalizeString(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function isPalindrome(str) {
  str = cleanString(str);
  //using two pointers
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Example usage:

console.log(isPalindrome("A man, a plan, a canal, Panamá")); // Output: true
console.log(isPalindrome("malayalam")); // Output: true
console.log(isPalindrome("max")); // Output: false
console.log(isPalindrome("á a à")); // Output: true
