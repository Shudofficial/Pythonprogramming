// let num1 = prompt("Enter a Number", 0)
// let num2 = prompt("enter second number", 0)
// function sum () {
//     +num1 +num2
// }
// alert (sum )
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);
