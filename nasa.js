const nasa = (NBR) =>{
    let str=""
    for (let i = 0; i<NBR;i++){
        str+=i
        if (i!=NBR-1){
            str+=" "
        }
    }
    return str
}