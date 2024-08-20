function reverseString(str) {
    return str.split('').reverse().join('');
}

function isEven(num) {
    return num % 2 === 0;
}

function maxInArray(arr) {
    return Math.max(...arr);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function flattenArray(arr) {
    return arr.flat(Infinity);
}

function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = {
    reverseString,
    isEven,
    maxInArray,
    capitalize,
    sumArray,
    deepClone,
    randomInRange,
    removeDuplicates,
    flattenArray,
    isPalindrome
};
  