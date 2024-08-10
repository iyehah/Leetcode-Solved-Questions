#include <stdbool.h>
#include <limits.h>

bool isPalindrome(int x) {
    if (x < 0) {
        return false; 
    }

    long original = x; 
    long reversed = 0;

    while (x > 0) {
        int digit = x % 10;

        if (reversed > (LONG_MAX - digit) / 10) {
            return false; 
        }

        reversed = reversed * 10 + digit;
        x /= 10;
    }

    return original == reversed;
}
