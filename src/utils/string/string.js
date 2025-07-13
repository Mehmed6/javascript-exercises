const LETTERS_TR = "abcçdefgğhıijklmnoöprsştuüvyz";
const LETTERS_EN = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_TR = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
const UPPERCASE_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALL_LETTERS_TR = LETTERS_TR + UPPERCASE_TR;
const ALL_LETTERS_EN = LETTERS_EN + UPPERCASE_EN;
/**
 * Concatenates s2 to the beginning of s1 if s1 does not start with s2.
 *
 * @param {string} s1 - The main string.
 * @param {string} s2 - The substring to check and possibly prepend.
 * @returns {string} The resulting string after the operation.
 */
export const concatIfNotStarts = (s1, s2) => s1.startsWith(s2) ? s1 : s2 + s1;

/**
 * Concatenates s2 to the end of s1 if s1 does not end with s2.
 *
 * @param {string} s1 - The main string.
 * @param {string} s2 - The substring to check and possibly append.
 * @returns {string} The resulting string after the operation.
 */
export const concatIfNotEnds = (s1, s2) => s1.endsWith(s2) ? s1 : s1 + s2;
/**
 * Checks if the given character is a letter in the Turkish or English alphabet.
 *
 * @param {string} c - The character to check.
 * @returns {boolean} Returns true if the character is a letter, otherwise false.
 */
export const isLetter = c => ALL_LETTERS_TR.includes(c) || ALL_LETTERS_EN.includes(c);

/**
 * Checks if the given character is not a letter in the Turkish or English alphabet.
 *
 * @param {string} c - The character to check.
 * @returns {boolean} Returns true if the character is not a letter, otherwise false.
 */
export const isNotLetter = c => !isLetter(c);

/**
 * Counts the number of occurrences of a substring within a string.
 *
 * @param {string} str - The string to search in.
 * @param {string} subStr - The substring to count.
 * @returns {number} The number of times subStr appears in str.
 */
export const countSubstring = (str, subStr) => {
    let count = 0;

    for (let idx = -1; (idx = str.indexOf(subStr, idx + 1)) !== -1; ++count)
        ;

    return count;
}

/**
 * Counts the number of occurrences of a substring within a string, ignoring case.
 *
 * @param {string} str - The string to search in.
 * @param {string} subStr - The substring to count.
 * @returns {number} The number of times subStr appears in str, case-insensitive.
 */
export const countSubstringIgnoreCase = (str, subStr) => countSubstring(str.toLowerCase(), subStr.toLowerCase());