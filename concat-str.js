function concatStr(a,b) {
    if (a[0] == undefined || b[0] == undefined) {
        return
    }
    return a+b
}

console.log(concatStr(1, 2))