// const nasa = (NBR) =>{
//     let str=""
//     for (let i = 1; i<=NBR;i++){
//         if (i%3==0 && i%5==0){
//             str+="NASA"
//         }else if(i%3==0){
//             str+="NA"
//         }else if(i%5==0){
//             str+="SA"
//         }else{
//             str+=i
//         }
//         if (i!=NBR){
//             str+=" "
//         }
//     }
//     return str
// }

const nasa = (NBR,t) =>{
    if (t==undefined){
        let t=1
    }else if(t>NBR){
        return
    }
    let str = ""
    if (t%3==0 && t%5==0){
        str+="NASA"
    }else if(t%3==0){
        str+="NA"
    }else if(t%5==0){
        str+="SA"
    }else{
        str+=t
    }
    if (t==NBR){
        return str
    }else{
        return str+" "+nasa(NBR,t+1)
    }
}