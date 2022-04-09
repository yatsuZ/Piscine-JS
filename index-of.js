const indexOf = (L,search,starte) =>{
    if (starte==undefined){
        starte=0
    }
    for (let i =0; i<L.length;i++){
        if (L[i]==search && i>=starte){
            return i
        }
    }
    return -1
}

const lastIndexOf  = (L,search,starte) =>{
    if (starte==undefined){
        starte=L.length
    }
    for (let i =L.length; i>=0;i--){
        if (L[i]==search && i<=starte){
            return i
        }
    }
    return -1
}
// const a = [1,2,3,5,12]
// const b = a.length
// const t = (z0) => {return z0+1}
// console.log(lastIndexOf([t, 0, 0, t], t, 2));