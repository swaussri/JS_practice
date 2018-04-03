//Program to flatten an array of arrays into a single array using the reduce and concat methods
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current, [])));

// → [1, 2, 3, 4, 5, 6]
