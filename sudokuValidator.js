var SudokuValidator = {

    /**
     * Takes a sudoku puzzle in 2 dimensional array format
     * and validates whether it is correct.
     *
     * See README.md for full validation rules.
     *
     * @param matrix {Matrix}
     * @return {Boolean} True if the puzzle is correct, false otherwise.
     */
    validateSudoku : function(matrix) {
        return this.validateMatrixSize(matrix) &&
               this.validateCells(matrix) &&
               this.validateOneOfEachRule(matrix);
    },

    /**
     * Checks the matrix to determine if its dimensions are valid.
     *
     * @param matrix {Matrix}
     * @return {Boolean} True if matrix is square and √N is an integer.
     */
    validateMatrixSize : function(matrix) {
        var height = matrix.length,
            y, row;

        // Check that the square root of the height is an integer.
        if ((Math.sqrt(height) % 1) !== 0) {
            return false;
        }

        // check that each row matches the height
        for (y = 0; y < height; y++) {
            row = matrix[y];
            if (row.length !== height) {
                return false;
            }
        }

        // if you've gotten this far, then the matrix is valid.
        return true;
    },

    /**
     * Checks each cell to be sure it's the right type and in range.
     */
    validateCells : function(matrix){
        var matrixSize = matrix.length,
            x, y, cellValue;

        for (y = 0; y < matrixSize; y++) {
            for (x = 0; x < matrixSize; x++) {
                cellValue = this.getCellAt(matrix, x, y);
                if (this.validateCell( cellValue, matrixSize) === false) {
                    return false;
                }
            }
        }
        return true;
    },

    /**
     * Checks horizontally, vertically, and in each square region that
     * exactly one of each digit between 1..N is present.
     *
     * Note: this is all in one function instead of 3 in order to avoid
     * duplicated code and running the loop multiple times.
     *
     * @param matrix {Matrix}
     * @return {Boolean} True if all rows, cols, and squares check out.
     */
    validateOneOfEachRule : function(matrix){
        var row, column, square;

        for (var n = 0; n < matrix.length; n++) {
            row = this.getRowAt(matrix, n);
            column = this.getColumnAt(matrix, n);
            square = this.getSquareAt(matrix, n);

            if (this.validateSet(row) &&
                this.validateSet(column) &&
                this.validateSet(square)) {
                continue;
            }
            return false;
        }
        return true;
    },


    /**
     * Validates whether a cell is within range for the matrix.
     *
     * @param cellValue {Number}
     * @return {Boolean} True if the cellValue is an integer and within the range of the matrix.
     */
    validateCell : function(cellValue, matrixSize) {
        // Check for decimal numbers
        if (cellValue % 1 > 0) { return false; }

        // Convert strings like "5" to ints
        cellValue = parseInt(cellValue, 10);

        // Check that the cell is within range
        return cellValue > 0 && cellValue <= matrixSize;
    },

    /**
     * Validates whether an array of N numbers contains exactly one of each between 1..N.
     *
     * @param set {Array.<Number>} A set (row, column, or square) of numbers
     * @return {Boolean} True if the cellValue is an integer and within the range of the matrix.
     */
    validateSet : function(set) {
        // create an array to record which digits were found.
        var checked = [],
            i, value;

        for (i = 0; i < set.length; i++) {
            value = set[i];
            // if checked[value-1] is defined, you've already added a digit here so it's a dupe.
            // use value-1 because numbers in the matrix are 1 based and the array is 0 based.
            if (checked[value-1] !== undefined) { return false; }
            // after checking for the value, set this slot to true so it can't be checked again.
            checked[value-1] = value;
        }
        return true;
    },

    /**
     * Returns the value at [x, y].
     *
     * @param matrix {Matrix}
     * @param x {Number}
     * @param y {Number}
     * @return {Number}
     */
    getCellAt : function(matrix, x, y) {
        return matrix[y][x];
    },

    /**
     * Gets the row at offset 'y'.
     *
     * @param matrix {Matrix}
     * @return {Array.<Number>} An array for the row.
     */
    getRowAt : function(matrix, y) {
        return matrix[y];
    },

    /**
     * Gets the row at offset 'x'.
     *
     * @param matrix {Matrix}
     * @return {Array.<Number>} An array for the column
     */
    getColumnAt : function(matrix, x) {
        var height = matrix.length,
            y, value,
            column = [];

        for (y = 0; y < height; y++) {
            column[y] = this.getCellAt(matrix, x, y);
        }

        return column;
    },

    /**
     * Returns the square region at the offset going form the top left to bottom right.
     *
     * @param matrix {Matrix}
     * @param offset {Number} 0 based offset for the square. For example, in a 9x9 matrix,
     *                        4 would be the middle square.
     * @return {Array.<Number>} A flat array of numbers for the square.
     */
    getSquareAt : function(matrix, offset) {
        var matrixSize = matrix.length,
            squareWidth = Math.sqrt(matrixSize),
            originX = (offset * squareWidth) % matrixSize,
            originY = Math.floor((offset * squareWidth) / matrixSize) * squareWidth,
            square = [],
            x, y, cell;

        for (y = 0; y < squareWidth; y++) {
            for (x = 0; x < squareWidth; x++) {
                cell = this.getCellAt(matrix, originX + x, originY + y);
                square.push( cell );
            }
        }

        return square;
    }
};

/**
 * @typedef {Array.<Array.<Number>>} Matrix
 */