function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return "";

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    // Loop through the array of strings
    for (let i = 1; i < strs.length; i++) {
        // Find the common prefix between the current prefix and the next string
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix length
            prefix = prefix.slice(0, prefix.length - 1);

            // If the prefix becomes empty, return an empty string
            if (prefix === "") return "";
        }
    }

    return prefix;
}
