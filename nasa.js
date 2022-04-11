const nasa = (NBR) =>{
    let str=""
    for (let i = 1; i<NBR-1;i++){
        if (i%3==0 && i%5==0){
            str+="NASA"
        }else if(i%3==0){
            str+="NA"
        }else if(i%5==0){
            str+="SA"
        }else{
            str+=i
        }
        if (i!=NBR-1){
            str+=" "
        }
    }
    return str
}