/**
 * Takes a sudoku puzzle in 2 dimensional array format
 * and validates whether it is correct.
 *
 * See README.md for full validation rules.
 *
 * @param matrix {Array.<Array.<Number>>}
 * @return Boolean True if the puzzle is correct, false otherwise.
 */
function validateSudoku (matrix) {
	var matrixSize;
	try {
		matrixSize = detectMatrixSize(matrix);
	} catch (error) {
		return false;
	}

	return true;
}

/**
 * Checks the matrix to determine it's dimensions (NxN).
 * 
 * @throws Error if matrix is not square and √N is not an integer.
 * @param matrix {Array.<Array.<Number>>}
 * @return Number The size of the square matrix.
 */
function detectMatrixSize (matrix) {
	var height = matrix.length,
		y = 0,
		row = null;

	// Check that the square root of the height is an integer.
	if ((Math.sqrt(height) % 1) !== 0) {
		throw new Error ("Size is not a square of an integer.");
	}

	// check that each row matches the height
	for (; y < height; y++) {
		row = matrix[y];
		if (row.length !== height) {
			throw new Error ("Length of rows do not match length of columns");
		}
	}

	// if you've gotten this far, then the matrix is valid. return the size.
	return height;
}


/**
 * Validates whether a cell is within range for the matrix.
 *
 * @param cellValue {Number}
 * @return Boolean True if the cellValue is an integer and within the range of the matrix.
 */
function validateCell (cellValue, matrixSize) {
	// Check for decimal numbers
	if (cellValue % 1 > 0) { return false; }

	// Convert strings like "5" to ints
	cellValue = parseInt(cellValue, 10);

	// Check that the cell is within range
	return cellValue > 0 && cellValue <= matrixSize;
}