/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
     let timeoutId;
    const cancelFn = () => {
        clearTimeout(timeoutId);
    };
    timeoutId = setTimeout(() => {
        fn(...args); 
    }, t);

    return cancelFn;
};
