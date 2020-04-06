// recursively sort first half of input array
// recursively sort second half of input array
// merge 2 sorted sublists into one
// need base case(s)
// C output array [length = n]
// A 1st sorted array [n/2]
// B 2nd sorted array [n/2]
// i = 1
// j = 1
// Running time: upper bound 6m
// Claim: merge sort requires <= 6n log2n + 6n ops to sort n numbers.
// Proof (assuming n = power of 2):
// 	Levels in recursion tree (as function of n, the length of the input array): log2n
//	Exact: log2n + 1
// 	At each level j=0,1,2..., log2n, there are 2j subproblems, each of size n/2j
//	6n independent of j
// Worst-case analysis: our running time
// Focused on large n - asymptotic
const assert = require('assert')
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 11, 12]
const mergeSort = arr =>
	arr
assert.deepStrictEqual(mergeSort(arr), [1, 2, 3, 4, 5, 6, 7, 9, 11, 12], 'Sorts array')
