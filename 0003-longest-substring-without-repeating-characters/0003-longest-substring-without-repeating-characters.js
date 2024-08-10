/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = new Map(); // Keeps track of the most recent index of each character

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

        // If the character is already in the map and its index is within the current window, move the start
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        // Update the character's latest index
        charIndexMap.set(char, end);

        // Calculate the length of the current window
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
