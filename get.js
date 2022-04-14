
const get = (src=Object,path=String) =>{
  // const reg = // a chaque fois qui a un point on coupe
  let valu = undefined
  let debut=0
  for (let fin=0;fin<path.length;fin++){
    if (path[fin]=="."){
      src = src[path.slice(debut,fin)]
      debut += fin+1
    }else if (fin==path.length){
      src= src[path.slice(debut,fin)]
    }
  }
  return src
}

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path) );// -> 'peekaboo'
