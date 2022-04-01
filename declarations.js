const escapeStr = "`\\/\"\'"
const arr = [4,'2']

const obj = {
    str:"oki",
    num:5,
    bool:true,
    undef:undefined
}

const nested = {
    arr:[4,undefined,'2'],
    obj:obj
}

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)