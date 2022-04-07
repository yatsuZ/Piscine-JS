function isPositive(N){
    return N>0
}

function abs(N){
    if (isPositive(N) || N ==0){
        return N
    }else{
        return N*-1
    }
}