/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
        } else if (obj && typeof obj === 'object') {
            return Object.keys(obj).length === 0;
        }
};