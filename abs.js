function isPositive(N){
    return N>=0
}

function abs(N){
    if (isPositive(N)){
        return N
    }else{
        return N*-1
    }
}