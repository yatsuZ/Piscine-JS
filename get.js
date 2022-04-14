
const get = (src=Object,path=String) =>{
  // const reg = // a chaque fois qui a un point on coupe
  let debut=0
  for (let fin=0;fin<path.length;fin++){
    
    if (path[fin]=="."){
      // console.log(path.slice(debut,fin));
      src = src[path.slice(debut,fin)]
      debut += fin+1
    }
    
  }
  return src[path.slice(debut,path.length)]
}

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path) );// -> 'peekaboo'
