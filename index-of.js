const indexOf = (L,search) =>{
    for (let i =0; i<L.length;i++){
        if (L[i-1]==search){
            return i
        }
    }
}
// const a = [1,2,3,5,12]
// const b = a.length
// console.log(b);