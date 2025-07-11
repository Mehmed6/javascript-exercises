const LETTERS_TR = "abcçdefgğhıijklmnoöprsştuüvyz";
const LETTERS_EN = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_TR = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
const UPPERCASE_EN = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const ALL_LETTERS_TR = LETTERS_TR + UPPERCASE_TR;
const ALL_LETTERS_EN = LETTERS_EN + UPPERCASE_EN;

export const concatIfNotStarts = (s1, s2) => s1.startsWith(s2) ? s1 : s2 + s1;
export const concatIfNotEnds = (s1, s2) => s1.endsWith(s2) ? s1 : s1 + s2;
export const isLetter = c => ALL_LETTERS_TR.includes(c) || ALL_LETTERS_EN.includes(c);
export const isNotLetter = c => !isLetter(c);

export const countSubstring = (str, subStr) => {
    let count = 0;

    for (let idx = -1; (idx = str.indexOf(subStr, idx + 1)) !== -1; ++count)
        ;

    return count;
}

export const countSubstringIgnoreCase = (str, subStr) => countSubstring(str.toLowerCase(), subStr.toLowerCase());
