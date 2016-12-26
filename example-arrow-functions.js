var names = ['Kelum', 'Chandima', 'Bhagya', 'Dilani'];
/*
names.forEach(function(name){
  console.log('ForEach', name);
});

names.forEach((name) => {
  console.log('Arrow Func', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => (name) + '!';
console.log('returnMe', returnMe('Kelum'));
*/

/*
var person = {
  name: 'Kelum',
  greet: function(){
    names.forEach(function(name){
      console.log(this.name + ' Say Hi to ' + name);
    });
  }
};

person.greet();

var person = {
  name: 'Kelum',
  greet: function(){
    names.forEach((name) => {
      //Arrow Function does not loose the reference to this keyword of its parent
      console.log(this.name + ' Say Hi to ' + name);
    });
  }
};

person.greet();
*/

function add (a, b){
  return a+ b;
}

console.log('Function', add(1, 2));

//Statement
var addStatement = (a, b) => {
  return a + b;
};

console.log('Arrow Statement', addStatement(2, 9));

//Expression
var addExpression = (a, b) => a + b;

console.log('Arrow Expression', addExpression(2, -9));
