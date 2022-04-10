const reverse =(L)=>{
    let l = []
    for (let i=L.length-1;i>=0;i--){
        if (typeof(L)=="string"){
            l += L[i] 
        }else{
            l.push(L[i])
        }
    }
    return l
}

// console.log(reverse("ko"));