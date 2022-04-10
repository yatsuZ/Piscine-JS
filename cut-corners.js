const round = (N)=>{
    let symbole = 1
    if (N<0){
        symbole = -1
    }
    N= N*symbole
    let ecart = N
    while (ecart>1){
        // console.log(ecart)
        ecart -=1 
    }
    let top = (1*symbole)-(ecart*symbole)
    console.log(top);
    top = N+(top*symbole)
    console.log(top);
    if (ecart == 0){
        return N
    }
    if ((ecart)<0.5){
        return (N-ecart)*symbole
    }else {
        return top*symbole
    }
}

const ceil = (N)=>{
    let ecart = N
    while (ecart>1){
        ecart -=1 
    }
    ecart = 1-ecart
    return N+ecart
}

const floor = (N)=>{
    let ecart = N
    while (ecart>1){
        ecart -=1 
    }
    return N-ecart
}

const trunc = (N)=>{
    return ceil(N)
}

// console.log(round(-5.9684526554465129));