function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('a and b should be number');
    }
  });
}

addPromise(2, 3).then(function(sum){
  console.log('Success', sum);
}, function(err){
  console.log('Error', err);
});

addPromise(2, 'a').then(function(sum){
  console.log('Success', sum);
}, function(err){
  console.log('Error', err);
});
