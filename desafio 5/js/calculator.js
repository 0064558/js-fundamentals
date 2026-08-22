export function sum(n1, n2) {
    return n1 + n2;

}

export function multiply(n1, n2) {
    return n1 * n2;
}

export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}