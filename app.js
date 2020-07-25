function sayHi() {
  console.log('Hi');
}
sayHi();
// function expression
var sayBye = function(){
  console.log('Bye');
}
sayBye();
//giving function as a parameter
var sayhi = function(func){
  console.log("Hi");
  console.log('I know what you mean.');
  func();
};

sayhi(sayBye);

var stuff = require('./stuff');

console.log(stuff.counter(['disha', 'ankita', 'priyanka', 'minakshi']))
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 7));
