function sign(n){
    if (n==0){
        return 0
    }else if (n>0){
        return 1
    }else {
        return -1
    }
}
function sameSign(a,b){
    if ((signe(a))==(signe(b))){
        return true
    }
    return false
}