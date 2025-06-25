function validateLength(str, expectedlength) {
    return str.length >= expectedlength;
}

function isNullOrEmpty(str) {
    return !str || str.length == 0;
}

function validateEmail(str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
}

function validateIfSame(str1, str2) {
    return str1.length > 0 && str1 === str2;
}

function validateIfInARange(num, range1, range2) {
    return range1 <= num && num <= range2;
}