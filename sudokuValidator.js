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
	return true;
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