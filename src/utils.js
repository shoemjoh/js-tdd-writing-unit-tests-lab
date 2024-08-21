// Your code here
// Function that accepts a string as an argument
// Returns true if the string is a palindrome and false if it isn't
// Receive string, create new string that is all of the string characters backwards.
// Loop through input string, i = string length, i-- , i = 0? OR i = 1, i++ and then insert it in character -1?

export function isPalindrome(word) {
    let normalizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    //console.log(word[0])
    let length = normalizedWord.length;
    for (let i = 0; i < length / 2; i++) {
        for (let i = 0; i < length / 2; i++) {
            if (normalizedWord[i] !== normalizedWord[length - i - 1]) {
                console.log("Not a palindrome")
                return false;
            }
        }
        return true

    }
}