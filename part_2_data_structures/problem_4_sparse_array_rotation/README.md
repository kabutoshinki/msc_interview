# Sparse Array Rotation

## Description

This repository contains a JavaScript function that rotates a sparse array (an array with a significant number of default values, such as null), preserving the relative positions of default values.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kabutoshinki/msc_interview.git
   cd part_2_data_structures
   cd problem_4_sparse_array_rotation
   ```

## Functionality

The repository includes two main functions:

1. groupByNull(array)
   ```bash
   function groupByNull(array) {
   const groups = [];
   let currentGroup = [];
   ```

array.forEach((item) => {
if (item === null) {
if (currentGroup.length > 0) {
groups.push(currentGroup);
currentGroup = [];
}
currentGroup.push(null);
} else {
if (currentGroup.filter((x) => x === null).length > 0) {
currentGroup.push(item);
} else {
groups.push([item]);
}
}
});

if (currentGroup.length > 0) {
groups.push(currentGroup);
}

return groups;
}

````
2. rotateSparseArray(array, steps).
```bash
function rotateSparseArray(array, steps) {
const groups = groupByNull(array);

for (let i = 0; i < steps % groups.length; i++) {
 groups.unshift(groups.pop());
}

return groups.flat();
}
````

## Usage

To run the application, use the following command:

```bash
node solution.js
```

### Example:

```bash
const arr1 = [1, null, 2, null, 3];
const arr2 = [1, 2, 4, null, 3, 4, 5, null, 6];

console.log(groupByNull(arr1)); // Output: [[1], [null, 2], [null, 3]]
console.log(groupByNull(arr2)); // Output: [[1], [2], [4], [null, 3, 4, 5], [null, 6]]

console.log(rotateSparseArray(arr1, 2)); // Output: [null, 2, null, 3, 1]
console.log(rotateSparseArray(arr2, 2)); // Output: [null, 3, 4, 5, null, 6, 1, 2, 4]

```

### Result:

```bash
[ [ 1 ], [ null, 2 ], [ null, 3 ] ]
[ [ 1 ], [ 2 ], [ 4 ], [ null, 3, 4, 5 ], [ null, 6 ] ]
[ null, 2, null, 3, 1 ]
[
  null, 3, 4, 5,
  null, 6, 1, 2,
  4
]
```
