// callback
// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }

// getTempCallback('Savannah', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// Promise

// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }

// getTempPromise('Savannah').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

// Challenge Area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('One of the inputs is not a number');
    }
  });
}

addPromise( 2, 'hello').then(function(data) {
  console.log('success', data);
}, function (err) {
  console.log('error', err);
});










