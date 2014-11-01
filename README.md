sudokuValidator.js
==================

Validates the correctness of arbitrarily sized sudoku puzzles. 

## Rules for validation
  - Data structure dimension: NxN where N > 0 and √N is an integer
  - Rows may only contain integers: 1..N (N included). Each row must contain exactly 1 of each digit 1..N
  - Columns may only contain integers: 1..N (N included). Each column must contain exactly 1 of each digit 1..N
  - 'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included). Each little square must contain exactly 1 of each digit 1..N
  - The input is a 2 dimensional array of length NxN. The output is a Boolean.
  
### Example Data:

```
// 9x9 Sudoku
[
  [7,8,4, 1,5,9, 3,2,6],
  [5,3,9, 6,7,2, 8,4,1],
  [6,1,2, 4,3,8, 7,5,9],

  [9,2,8, 7,1,5, 4,6,3],
  [3,5,7, 8,4,6, 1,9,2],
  [4,6,1, 9,2,3, 5,8,7],

  [8,7,6, 3,9,4, 2,1,5],
  [2,4,3, 5,6,1, 9,7,8],
  [1,9,5, 2,8,7, 6,3,4]
]
```
## Use
var puzzleIsValid = validateSudoku (puzzle);

## Tests
[View qunit test results](http://rawgit.com/mimshwright/sudokuValidator.js/master/test/index.html)
