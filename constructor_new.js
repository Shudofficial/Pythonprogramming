//Is it possible to create functions A and B so that new A() == new B()?
let obj = {}

function A () {return obj};
function B () { return obj};
alert ( new A() == new B() )
//The result is true.
function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
  
    this.sum = function() {
      return this.a + this.b;
    };
  
    this.mul = function() {
      return this.a * this.b;
    };
  }
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Accumulator(startingValue) {
    this.value = startingValue
    this.read = function() {
        this.value += +prompt("Input a Value", 0);
    };
    
}
let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values