/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    // Check if the total number of elements matches rowsCount * colsCount
    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    // Initialize the result matrix
    const result = Array.from({ length: rowsCount }, () => Array(colsCount));

    let index = 0;

    // Fill the result matrix in snail traversal order
    for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) { // Traverse downwards
            for (let row = 0; row < rowsCount; row++) {
                result[row][col] = this[index++];
            }
        } else { // Traverse upwards
            for (let row = rowsCount - 1; row >= 0; row--) {
                result[row][col] = this[index++];
            }
        }
    }

    return result;
};
/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */