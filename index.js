/*module.exports = () => {
}; */
/*const fs = require('fs');
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
*/
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
const fs = require ('fs');  //ve los archivos
const Marked = require ('marked'); // transforma markdown a HTML
//const fetch = require('fetch');
const pathN = require('path')  // ve las rutas 
const process = require('process');
const chalk = require('chalk'); // da colores 
const { argv } = require('process');
let path = process.argv[2]
let option = process.argv[3]
path = pathN.resolve(path);
//console.log("CAMBIAR mi ruta es POR OTRA COSA" + path)
let stats = false;
let validate = false;
if (process.argv.includes('--stats' && '--validate')) {
  stats = true;
  validate = true;
}else if(process.argv.includes('--stats')) {
  stats = true;
} else if(process.argv.includes('--validate')){
  validate = true;
} 
//console.log(process.argv.includes('--stats'));
//console.log(process.argv.includes('--validate'));
/*switch (validate, stats) {
  case validate:
    console.log("VALIDATE ES VERDADERO");
    break;
  case stats:
    console.log("STATS ES VERDADERO");
    break;
    case "stats" = true && "validate" == true:
    console.log("STATS Y VALIDATE SON VERDADEROS");
    break;
  default:
    console.log("AY! no lo encuento aiudaaaa")
}*/
if(stats == true && validate == true) {
  console.log("AMBOS SON VERDADEROS, I DONT NEED HELP XD");
} else if (stats == true) {
  console.log("STATS ES VERDADERO");
} else if (validate == true) {
  console.log("VALIDATE ES VERDADERO")
}
//lee archivo md
const readPath = (path => {
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
const filterLinks = (links) => {
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
      readPath(path).then(res =>{
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
        links = filterLinks(links);
       /* links.map(element =>{console.log("hola"`
${chalk.yellow("href: "+element.href)}
${chalk.green("text :"+element.text)}
${chalk.cyan("path :"+element.path)}
        `)});*/
          })
          .catch(err =>{
            reject(err)
          })
        })
    }
    getLinks(path)