function selectionSortRecursive(arr) {
  if (arr.length < 2) {
    return arr
  }
  const min = Math.min(...arr)
  const i = arr.indexOf(min)
  arr.splice(i, 1)
  return [min, ...selectionSortRecursive(arr)]

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
