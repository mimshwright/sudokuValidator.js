test("dependencies", function () {
	equal (typeof validateSudoku, "function", "validateSudoku() exists");
	equal (typeof validateCell, "function", "validateCell() exists");
});

test("validateCell", function () {
	equal (validateCell(1, 9), true, "1 is between 1..9");
	equal (validateCell(9, 9), true, "9 is between 1..9");

	equal (validateCell(0, 9), false, "0 is not between 1..N");
	equal (validateCell(-1, 9), false, "-1 is not between 1..N");
	equal (validateCell(789, 9), false, "789 is not between 1..N");
	equal (validateCell(5.7, 9), false, "5.7 is not an integer");
	equal (validateCell("sudoku", 9), false, "\"sudoku\" is not an integer");
	equal (validateCell(null, 9), false, "null is not an integer");

	equal (validateCell("5", 9), true, "\"5\" evaluates to 5");
});

test("validateSudoku", function () {
	equal (validateSudoku(MATRIX_1x1), true, "Validates 1x1 matrix");
	equal (validateSudoku(MATRIX_4x4), true, "Validates 4x4 matrix");
	equal (validateSudoku(MATRIX_9x9), true, "Validates 9x9 matrix");
	equal (validateSudoku(MATRIX_16x16), true, "Validates 16x16 matrix");

	equal (validateSudoku(MATRIX_BAD_DIMENSIONS), false, "Matrix must be NxN");
	equal (validateSudoku(MATRIX_DIMENSION_NOT_A_SQUARE), false, "√N must be an integer.");
	equal (validateSudoku(MATRIX_OUT_OF_RANGE), false, "Cell values must be 1<=x<=N");
	equal (validateSudoku(MATRIX_BAD_COLUMNS), false, "Matrix must have 1 of each digit 1..N per column.");
	equal (validateSudoku(MATRIX_BAD_ROWS), false, "Matrix must have 1 of each digit 1..N per row.");
	equal (validateSudoku(MATRIX_BAD_SQUARES), false, "Matrix must have 1 of each digit 1..N per square.");
});


////////////// TEST DATA BELOW //////////////

// Correct Matrices

var MATRIX_1x1 = [
	[1]
];

var MATRIX_4x4 = [
	[1,2, 3,4],
	[3,4, 1,2],

	[2,3, 4,1],
	[4,1, 2,3]
];

var MATRIX_9x9 = [
	[7,8,4, 1,5,9, 3,2,6],
	[5,3,9, 6,7,2, 8,4,1],
	[6,1,2, 4,3,8, 7,5,9],

	[9,2,8, 7,1,5, 4,6,3],
	[3,5,7, 8,4,6, 1,9,2],
	[4,6,1, 9,2,3, 5,8,7],

	[8,7,6, 3,9,4, 2,1,5],
	[2,4,3, 5,6,1, 9,7,8],
	[1,9,5, 2,8,7, 6,3,4]
];

var MATRIX_16x16 = [
	[0x1,0x2,0x3,0x4,  0x5,0x6,0x7,0x8,  0x9,0xA,0xB,0xC,  0xD,0xE,0xF,0x10 ],
	[0x5,0x6,0x7,0x8,  0x9,0xA,0xB,0xC,  0xD,0xE,0xF,0x10, 0x1,0x2,0x3,0x4  ],
	[0x9,0xA,0xB,0xC,  0xD,0xE,0xF,0x10, 0x1,0x2,0x3,0x4,  0x5,0x6,0x7,0x8  ],
	[0xD,0xE,0xF,0x10, 0x1,0x2,0x3,0x4,  0x5,0x6,0x7,0x8,  0x9,0xA,0xB,0xC  ],

	[0x2,0x3,0x4,0x5,  0x6,0x7,0x8,0x9,  0xA,0xB,0xC,0xD,  0xE,0xF,0x10,0x1 ],
	[0x6,0x7,0x8,0x9,  0xA,0xB,0xC,0xD,  0xE,0xF,0x10,0x1, 0x2,0x3,0x4,0x5  ],
	[0xA,0xB,0xC,0xD,  0xE,0xF,0x10,0x1, 0x2,0x3,0x4,0x5,  0x6,0x7,0x8,0x9  ],
	[0xE,0xF,0x10,0x1, 0x2,0x3,0x4,0x5,  0x6,0x7,0x8,0x9,  0xA,0xB,0xC,0xD  ],

	[0x3,0x4,0x5,0x6,  0x7,0x8,0x9,0xA,  0xB,0xC,0xD,0xE,  0xF,0x10,0x1,0x2 ],
	[0x7,0x8,0x9,0xA,  0xB,0xC,0xD,0xE,  0xF,0x10,0x1,0x2, 0x3,0x4,0x5,0x6  ],
	[0xB,0xC,0xD,0xE,  0xF,0x10,0x1,0x2, 0x3,0x4,0x5,0x6,  0x7,0x8,0x9,0xA  ],
	[0xF,0x10,0x1,0x2, 0x3,0x4,0x5,0x6,  0x7,0x8,0x9,0xA,  0xB,0xC,0xD,0xE  ],

	[0x4,0x5,0x6,0x7,  0x8,0x9,0xA,0xB,  0xC,0xD,0xE,0xF,  0x10,0x1,0x2,0x3 ],
	[0x8,0x9,0xA,0xB,  0xC,0xD,0xE,0xF,  0x10,0x1,0x2,0x3, 0x4,0x5,0x6,0x7  ],
	[0xC,0xD,0xE,0xF,  0x10,0x1,0x2,0x3, 0x4,0x5,0x6,0x7,  0x8,0x9,0xA,0xB  ],
	[0x10,0x1,0x2,0x3, 0x4,0x5,0x6,0x7,  0x8,0x9,0xA,0xB,  0xC,0xD,0xE,0xF  ]
];

// Incorrect Matrices

// 9x3 Matrix. Must be NxN
var MATRIX_BAD_DIMENSIONS = [
	[7,8,4, 1,5,9, 3,2,6],
	[5,3,9, 6,7,2, 8,4,1],
	[6,1,2, 4,3,8, 7,5,9]
];

// 3x3 Matrix. √N must be an integer.
var MATRIX_DIMENSION_NOT_A_SQUARE = [
	[1,2,3],
	[2,3,1],
	[3,1,2]
];

// 4x4 matrix with values > N
var MATRIX_OUT_OF_RANGE = [
	[5,6, 7,8],
	[7,8, 5,6],

	[6,7, 8,5],
	[8,5, 6,7]
];

// 4x4 matrix that doesn't follow the rule of exactly 1 of each digit 1..N per column.
var MATRIX_BAD_COLUMNS = [
	[1,2, 3,4],
	[3,4, 1,2],

	[1,2, 3,4],
	[3,4, 1,2],
];

// 4x4 matrix that doesn't follow the rule of exactly 1 of each digit 1..N per row.
var MATRIX_BAD_ROWS = [
	[1,3, 1,3],
	[2,4, 2,4],

	[3,1, 3,1],
	[4,2, 4,2],
];

// 4x4 matrix that doesn't follow the rule of exactly 1 of each digit 1..N per square.
var MATRIX_BAD_SQUARES = [
	[1,3, 2,4],
	[3,1, 4,2],

	[2,4, 3,1],
	[4,2, 1,3],
];