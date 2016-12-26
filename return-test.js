function returnTest(nameToSearch){
  var names = ['Kelum', 'Chandima', 'Bhagya', 'Dilani'];

  var obj = {};

  names.forEach(function(name){
    if(name == nameToSearch){
      obj.name = name;
      return false;
    }
  });

  return obj;
}

console.log('Search Kelum', returnTest('Kelum').name);
console.log('Search Kelum', returnTest('Saman').name);
