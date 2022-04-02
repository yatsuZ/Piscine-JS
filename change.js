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
    return sourceObject[key]=value
    
}
//  sourceObject.log(get("str"))
//  sourceObject.log(set('num', 55), 55)
//  sourceObject.log(get("num"))
