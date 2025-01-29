export function isPalindrome(input) {
    if (typeof input === "string") {
        return checkStringPalindrome(input);
    } else if (typeof input === "number") {
        return checkNumberPalindrome(input);
    } else {
        throw new Error("Invalid Input");
    }
}

const checkStringPalindrome = (input) => {
    let start = 0, end = input.length - 1;

    while (start <= end) {
        if (input[start] !== input[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }

    return true;
}

const checkNumberPalindrome = (input) => {
    if (input < 0) return false;

    let reversed = 0;
    let copy = input;

    while (copy > 0) {
        reversed = reversed * 10 + copy % 10;
        copy = Math.floor(copy / 10);
    }

    return reversed === input;
}

export default isPalindrome
