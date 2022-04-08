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


//console.log(modulo(15,10));