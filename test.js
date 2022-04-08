const division= (a,b) =>{
    if (a<0 && b<0 || a>0 && b>0){
        return division_positive(Math.abs(a),Math.abs(b))
    }else{
        return -division_positive(Math.abs(a),Math.abs(b))
    }
}

const division_positive=(a,b)=>{
    if (b >a) {
        return 0
    }else {
        return 1+division(a-b,b)
    }
}

const modulo=(a,b)=>{
    if (a<0){
        return -reste(Math.abs(a),Math.abs(b))
    }else{
        return reste(Math.abs(a),Math.abs(b))
    }
}

const reste=(a,b)=>{
    if (a<b) {
        return a
    }else {
        return reste(a-b,b)
    }
}

//console.log(modulo(11,10));