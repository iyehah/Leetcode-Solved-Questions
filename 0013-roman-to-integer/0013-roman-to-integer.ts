function romanToInt(s: string): number {
    // Define a map for Roman numeral values
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Traverse the string from left to right
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanMap[s[i]];

        if (currentValue > prevValue) {
            // If current value is greater than previous, subtract twice the previous value
            // (because it was added once in the previous iteration)
            total += currentValue - 2 * prevValue;
        } else {
            total += currentValue;
        }

        prevValue = currentValue;
    }

    return total;
}