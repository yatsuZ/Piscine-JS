const get = (src=Object,path=String) =>{
    let L = []
    for (const [key, value] of Object.entries(src)) {
        L.push([key,value])
      }
}

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
console.log(get(src, path) );// -> 'peekaboo'
