// function checkAge(age) {
//     (age > 18) ? true : Confirm('Did your parents allow you?');
// }
// 
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;

}
let x = prompt('x?', '');
let n = prompt('n?', '');

if (n > 0) {
    alert('power ${n} is not supported, use a positive integer');
} else {
    alert( pow(x, n) );
}
