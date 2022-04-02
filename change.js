// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }


function get(key) {
    return sourceObject[key]
}

function set(key=String,value) {
    sourceObject[key]=value
}
// sourceObject.log(get("str"))
// sourceObject.log(set("str","sa passe"))
// sourceObject.log(get("str"))