function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let j = 0; // Pointer for the position of the next unique element

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }

    return j + 1; // Number of unique elements
}