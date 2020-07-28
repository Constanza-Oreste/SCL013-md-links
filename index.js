
/*module.exports = () => {

}; */
const fs = require('fs');



// Node.js program to demonstrate the 
// fs.readdir() method 
  
// Import the filesystem module 
//const path = require('path'); 
  
// Function to get current filenames 
// in directory with specific extension 

/*fs.readdir(path, (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    console.log("\Filenames with the .md extension:"); 
    files.forEach(file => { 
      if (path.extname(file) == ".md") 
        console.log(file); 
    }) 
  } 
}) */
 /*fs.readdir(path, (err,files) => {
     if(err){
         console.log(err);
     }else{
         console.log("\Filenames with the .md extension found:");
         files.forEach(file=>{  
            if (path.extname(file) == ".md")
            console.log(file);
         })
     }
 })*/
const path = process.argv[2];
fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
/*fs.readdir( __dirname, (err, files) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("\Filenames with the .md extension:"); 
      files.forEach(file => { 
        if (path.extname(file) == ".md") 
          console.log(file); 
      }) 
    } 
  })*/