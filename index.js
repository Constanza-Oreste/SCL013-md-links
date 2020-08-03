const fs = require ('fs');  //ve los archivos
const Marked = require ('marked'); // transforma markdown a HTML
//const fetch = require('fetch');
const pathN = require('path')  // ve las rutas 
const process = require('process');
const chalk = require('chalk'); // da colores 
let path = process.argv[2]
path = pathN.resolve(path);
console.log("CAMBIAR mi ruta es POR OTRA COSA" + path)
//lee archivo md
const reaArcMd = (path => {
  return new Promise(( resolve,reject) =>{
    fs.readFile(path,'utf8', (err,data)=>{
      if (err){
        reject(console.log("CAMBIAR ESTO POR ASCII" + path))
      }
      resolve(data)
      //console.log(data);
    })
  })
});
const filtLinks = (links) => {
  return links.filter((link) => {
      const prefix = link.href.substring(0, 4); // averiguar porque es 0,4 porque si pongo otro numero no pasa
      if (prefix == 'http') {
          return true;
      } else {
          return false;
      }
  })
}
//obtiene links del archivo md
const getLinks = (path) => {
    return new Promise ((resolve,reject)=>{ //averiguar resolve y reject
      reaArcMd(path).then(res =>{
      let links = [];
      const renderer = new Marked.Renderer(); // averiguar rendered y 
      renderer.link = function(href, title, text){
          links.push({
            //
            href:href,
            //
            text:text,
            //
            path: path})
        }
        Marked(res,{renderer:renderer})
        resolve(links)
        links = filtLinks(links);
        links.map(element =>{console.log(`
${chalk.yellow("href: "+element.href)}
${chalk.green("text :"+element.text)}
${chalk.red("path :"+element.path)}
        `)});
          })
          .catch(err =>{
            reject(err)
          })
        })
    }
    getLinks(path)



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

