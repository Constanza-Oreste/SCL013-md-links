
/*module.exports = () => {

}; */
const fs = require('fs');
//const path=require('path');
const path = process.argv[2]; //toma el nombre del archivo
 console.log(process.argv[0], "esta funcionando el 0");
 console.log(process.argv[1], "funciona el 1");
 console.log(process.argv[2], "ARCHIVO MD NO ENCONTRADO");


 fs.readFile(path,'utf8', function (err, data) {
  console.log("leyendo archivo");
if(err){
  console.log(`Error ${err}`);

}else {
  console.log(data.trim().split('\n').filter(word => word.includes('https://')));
  
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

/*fs.readFile('README.md', 'utf8', function(err, data){ 
      
  // Display the file content 
    console.log(data); 
}); */


  

  
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
/*const path = process.argv[2];
fs.readdir(path, function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});*/ 

