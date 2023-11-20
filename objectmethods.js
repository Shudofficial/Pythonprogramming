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
read() {
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

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep();