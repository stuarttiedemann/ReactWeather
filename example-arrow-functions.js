// Arrow functions preserve the 'this' of the parent function

// var names = ['stuart','stephen','troy','liz','saray','maria'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });

// names.forEach((name) => {
//   console.log('arrow-func', name);
// });


// function add (a, b) {
//   return a + b;
// }

// console.log(add(1,3));
// console.log(add(9,0));

var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(4,7));

var addExpression = (a, b) => a + b;

console.log(addExpression(3, -2));