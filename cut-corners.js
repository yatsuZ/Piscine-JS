const round = (N)=>{
    let symbole = 1
    if (N<0){
        symbole = -1
    }
    N= N*symbole
    let ecart = N
    while (ecart>=1){
        // console.log(ecart)
        ecart -=1 
    }
    let top = (1*symbole)-(ecart*symbole)
    // console.log(top);
    top = N+(top*symbole)
    // console.log(top);
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
    let symbole = 1
    if (N<0){
        symbole = -1
    }
    N= N*symbole
    let ecart = N
    while (ecart>=1){
        ecart -=1 
    }
    if (ecart==0){
        return N
    }
    ecart = 1-ecart
    return N+(ecart*symbole)
}

const floor = (N)=>{
    let symbole = 1
    if (N<0){
        symbole = -1
    }
    let ecart = N*symbole
    while (ecart>=1){
        ecart -=1 
    }
    if (ecart==0){
        return N
    }
    return (N-ecart*symbole)
}

const trunc = (N)=>{
    return ceil(N)
}
// let a = [3, -3.2831853071795862, 2, -3.2831853071795862, 0]
// for (i=0;i<a.length;i++){
//     console.log((floor(a[i])));
// }
