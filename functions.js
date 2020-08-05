const urlExists = require('url-exists');

urlExists('https://www.google.com', function(err, exists) {
  console.log(exists); // true 
});

/*urlExists('https://www.fakeurl.notreal', function(err, exists) {
  console.log(exists); // false 
});*/
const fetch=require('node-fetch');



let linksResponse=fetch('https://github.com/');
linksResponse.then((res)=>{
  return res.json();
}).then((json)=>{
  console.log(json);
}).catch(err => console.error(err));