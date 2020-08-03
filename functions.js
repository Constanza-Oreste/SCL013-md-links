const urlExists = require('url-exists');

urlExists('https://www.google.com', function(err, exists) {
  console.log(exists); // true 
});

/*urlExists('https://www.fakeurl.notreal', function(err, exists) {
  console.log(exists); // false 
});*/