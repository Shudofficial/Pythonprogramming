// let username = prompt('Who is there?')
// if (username === 'Admin') {
//     let password = prompt('Password?')
//     if (password === 'TheMaster') {
//         alert('Welcome')
//     } else if (password === '' || password === null) {
//         alert('Cancelled')
//     } else {
//         alert('Wrong password')
//     }
// } else {
//     alert('I don\'t know you')
// }
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }
// let userName = prompt('Who is there?');

// let result = (userName === 'Admin') ?
//   ((let pass = prompt('Password?', '')) === 'TheMaster' ? alert('Welcome!') :
//    ((pass === '' || pass === null) ? alert('Canceled') : alert('Wrong password'))) :
//   ((userName === '' || userName === null) ? alert('Canceled') :
//    alert("I don't know you"));
//    //   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }
let userName = prompt('Who is there?');

let result = (userName === 'Admin') ?
  ((pass = prompt('Password?', '')) === 'TheMaster' ? alert('Welcome!') :
   ((pass === '' || pass === null) ? alert('Canceled') : alert('Wrong password'))) :
  ((userName === '' || userName === null) ? alert('Canceled') :
   alert("I don't know you"));