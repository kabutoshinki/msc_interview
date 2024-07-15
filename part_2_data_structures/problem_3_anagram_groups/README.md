# Anagram Groups

## Description

This repository contains a JavaScript function that groups a list of strings into anagrams. Anagrams are strings that have the same characters in the same frequencies.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kabutoshinki/msc_interview.git
   cd part_2_data_structures
   cd problem_3_anagram_groups
   ```

## Functionality

The anagramGroups function performs the following steps to group anagrams:

1. Mapping Anagrams: Iterates through each word in the input list.
2. Sorting Characters: Sorts the characters of each word alphabetically.
3. Grouping: Uses a Map to store words grouped by their sorted character sequence.
4. Output: Converts the Map to an array of arrays, where each inner array represents a group of anagrams.

## Usage

To run the application, use the following command:

```bash
node solution.js
```

### Example:

```bash
console.log(anagramGroups(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log(anagramGroups(["a", "b", "c", "d", "e", "f"]));

console.log(anagramGroups(["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"]));
```

### Result:

```bash
[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
[ [ 'a' ], [ 'b' ], [ 'c' ], [ 'd' ], [ 'e' ], [ 'f' ] ]
[ [ 'a' ], [ 'aa' ], [ 'aaa' ], [ 'aaaa' ], [ 'aaaaa' ], [ 'aaaaaa' ] ]
```
