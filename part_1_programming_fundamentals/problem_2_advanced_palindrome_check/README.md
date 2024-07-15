# Advanced Palindrome Check

## Description

This repository contains a JavaScript function that checks whether a given string is a palindrome, considering only alphanumeric characters, ignoring cases, and handling Unicode characters properly.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kabutoshinki/msc_interview.git
   cd part_1_programming_fundamentals
   cd problem_2_advanced_palindrome_check
   ```

## Functionality

The isPalindrome function performs the following steps to determine if a string is a palindrome:

1. Normalization: Removes accents from characters using Unicode normalization (NFD form) and replaces them with their base form.
2. Cleaning: Converts the normalized string to lowercase and removes non-alphanumeric characters.
3. Palindrome Check: Uses a two-pointer technique to compare characters from the beginning and end of the cleaned string to determine if it reads the same forwards and backwards.

## Usage

To run the application, use the following command:

```bash
node solution.js
```

### Example:

```bash
console.log(isPalindrome("A man, a plan, a canal, Panamá")); // Output: true
console.log(isPalindrome("malayalam")); // Output: true
console.log(isPalindrome("max")); // Output: false
console.log(isPalindrome("á a à")); // Output: true
```

### Result:

```bash
true
true
false
true
```
