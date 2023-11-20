// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref.name ); // What's the result? undefined
  // Create a code with three methods, read, sum and multiply
let calculator = {
read(a, b) {
    this.a = prompt("input a"),
    this.b = prompt("input b")
},
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
};
calculator.read()
alert( calculator.sum() );
alert( calculator.mul() );
