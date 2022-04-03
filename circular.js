// let circular = new Object();
// circular.circular = circular;
//meme methode mauvaise ecriture sa ne marche pas parceque je definie un obj dans un obj 
//en meme temps que sa creation donc non
// const circular = {
//     circular:circular
// }
//console.log(circular)

//donc si mon hypothese et bonne je peux le faire comme sa aussi 

let circular = {};
circular.circular = circular;