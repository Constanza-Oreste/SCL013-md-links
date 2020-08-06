const fs = require ('fs');  //ve los archivos
const Marked = require ('marked'); // transforma markdown a HTML
const pathN = require('path')  // ve las rutas 
const process = require('process');
const chalk = require('chalk'); // da colores 
const { argv } = require('process');
const fetch=require('node-fetch');

let path = process.argv[2]
let option = process.argv[3]
path = pathN.resolve(path);

/*let linksResponse=fetch('https://www.google.com');
linksResponse.then((res)=>{
  return res.json();
}).then((json)=>{
  console.log(json);
})*/
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
    })
  })
});
const filterLinks = (links) => {
  return links.filter((link) => {
      const http = link.href.substring(0, 4); // Extrae caracteres desde posicion 0 a 4
      if (http == 'http') {
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
       links.map(element =>{console.log(`
${chalk.yellow("href: "+element.href)}
${chalk.green("text :"+element.text)}
${chalk.cyan("path :"+element.path)}
        `)});
          })
          .catch(err =>{
            reject(err)
          })
        })
    }
    getLinks(path)