const arr = (arg) => Array.isArray(arg) ? true:false
const get = (src=Object,path=String) =>{
  let transfer = ""
  let debut = 0
  let  b = undefined
  for (let fin =0;fin<path.length;fin++){
    if (path[fin]=="."){
      transfer = path.slice(debut,fin)
      if (b==undefined){
        b = src[path]
      }else{
        b = b[path]
      }
      debut += fin+1
    }
  }
  return b
}

const t =(a)=>a+1
console.log(get({ a: { b: t } }, 'a.b'));
console.log(get({ a: [{ b: t }] }, 'a.0.b'));
