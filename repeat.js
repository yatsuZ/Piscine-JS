//recurcife
// const repeat = (S,N) => {
//     if (N == 0){
//         return ""
//     }else {
//         return S+repeat(S,N-1)
//     }
// }

/////////////////////////////////////////////////

// Iterative avec while
// const repeat =(S,N) => {
//     var i = 0
//     var s = ""
//     while (i < N){
//         s += S
//         i++
//     }
//     return s
// }

///////////////////////////////////////////////////

// Iterative avec for

const repeat =(S,N) => {
    var s = ""
    for (let i = 0; i < N; i++){
        s += S
    }
    return s
}
// console.log(repeat('a', 3), "==="+" "+ 'aaa');
