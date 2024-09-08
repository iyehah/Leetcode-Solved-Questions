function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // If it's a closing bracket
        if (char in map) {
            // Pop the top element from the stack (if stack is not empty), otherwise use a dummy value
            const topElement = stack.length ? stack.pop() : '#';
            
            // Check if the popped element matches the corresponding opening bracket
            if (map[char] !== topElement) {
                return false;
            }
        } else {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty at the end, all brackets were matched correctly
    return stack.length === 0;
}