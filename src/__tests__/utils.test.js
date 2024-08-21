// Your tests here

import { isPalindrome } from "../utils"

describe("isPalindrome", () => {
    it("returns true if the word is a palindrome and false if it's not", () => {
        // Arrange
        const palYes = "racecar";

        // Act
        const checkPal = isPalindrome(palYes);

        // Assert
        expect(checkPal).toBe(true);
    })
})