var names = ['Elton', 'Jared', 'Colin'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//


// names.forEach((name) => {
//   console.log('forEach', name);
//   console.log('all names', names);
// });


// names.forEach((name) => console.log('forEach3', name));


// var returnMe = (name) => name + '!';
// console.log(returnMe('Elton'));


// using arrow  to not overide the this
// var person = {
//   name: 'Elton',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();


// Challenge area
function add(a, b) {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

//add statement
// var addStatement = (a, b) => {
//   return a + b;
// }
// console.log(addStatement(1, 3));


//addExpression
// var addExpression = (a, b) => a + b;
// console.log(addExpression(12, 9));
