
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
const includes = (L,search,starte) =>{
    if (starte==undefined){
        starte=0
    }
    for (let i =0; i<L.length;i++){
        if (L[i]==search && i>=starte){
            return true
        }
    }
    return false
}