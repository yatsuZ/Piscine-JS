const get = (src=Object,path=String) =>{
  // const reg = // a chaque fois qui a un point on coupe
  let trouver=false
  let debut=0
  for (let fin=0;fin<path.length;fin++){
    
    if (path[fin]=="."){
      // console.log(path.slice(debut,fin));
      for (let [key] of Object.entries(src)){
        trouver= false
        if (path.slice(debut,fin)==key){
          src = src[path.slice(debut,fin)]
          debut += fin+1
          trouver=true
          break
        }
      }
      if (trouver==false){
        return undefined
      }
    }
  }
  return typeof(src[path.slice(debut,path.length)])==undefined?undefined:src[path.slice(debut,path.length)]
}


console.log(get({ nested: { key: 'value' } }, 'nx.nx') );
