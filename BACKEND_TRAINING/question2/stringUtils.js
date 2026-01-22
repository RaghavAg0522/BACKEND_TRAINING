// Capitalize the first letter of a string
function capitalize(str) {
    if (!str || typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse a string
function reverseString(str) {
    if (typeof str !== "string") return "";
    return str.split("").reverse().join("");
}

// Count vowels in a string
function countVowels(str) {
    if (typeof str !== "string") return 0;
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Export all functions
module.exports = {
    capitalize,
    reverseString,
    countVowels
};
