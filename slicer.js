// Create the slice function that works like Array.slice and String.slice

// It takes an additional first argument which is the string or the array

const slice = (L,Debut,Fin) =>{
    let l = []
    if (Debut== undefined){
        Debut = 0
    }
    if (Fin== undefined){
        Fin = L.length
    }
    for (let i = 0; i<Fin;i++){
        if (i>=Debut && i < L.length){
            l = l+ L[i]
        }
    }
    return l
}
// const a = 'abcdef'
// // console.log(a[0,2]);
// console.log(slice(a, 2));