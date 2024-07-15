function groupByNull(array) {
  const groups = [];
  let currentGroup = [];
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

// Sparse Array Rotation to the right
function rotateSparseArray(array, steps) {
  const groups = groupByNull(array);

  for (let i = 0; i < steps % groups.length; i++) {
    groups.unshift(groups.pop());
  }
  return groups.flat();
}
const arr1 = [1, null, 2, null, 3];
const arr2 = [1, 2, 4, null, 3, 4, 5, null, 6];
console.log(groupByNull(arr1)); // Output: [[1], [null, 2], [null, 3]]
console.log(groupByNull(arr2)); // Output: [[1], [2], [4], [null, 3, 4, 5], [null, 6]]

console.log(rotateSparseArray(arr1, 2)); // Output: [null, 2, null, 3, 1 ]
console.log(rotateSparseArray(arr2, 2)); // Output: [null, 3, 4, 5,null, 6, 1, 2,4]
