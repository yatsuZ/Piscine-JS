// Create the slice function that works like Array.slice and String.slice

// It takes an additional first argument which is the string or the array

const slice = (L,Debut,Fin) =>{
    let l = []
    if (Debut== undefined){
        Debut = 0
    }else if (Debut<0){
        Debut = L.length+Debut
    }
    if (Fin== undefined){
        Fin = L.length
    }else if (Fin<0){
        Fin = L.length+Fin
    }
    for (let i = 0; i<Fin;i++){
        if (i>=Debut && i < L.length){
            if (typeof(L)==="string"){
                l = l+ L[i]
            }else{
                l.push(L[i])
            }
            
        }
    }
    return l
}
// const a = 'abcdef'
// // console.log(a[0,2]);
// console.log(slice([1, 2, 3, 4, 5, 6], 2));