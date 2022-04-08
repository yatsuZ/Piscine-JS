const indexOf = (L,search,starte) =>{
    for (let i =0; i<L.length;i++){
        if (L[i]==search && i>=starte){
            return i
        }
    }
}
// const a = [1,2,3,5,12]
// const b = a.length
// console.log(b);