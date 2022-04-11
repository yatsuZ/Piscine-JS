const chunk = (L,diviseur) =>{
    NBR=Math.ceil(L.length/diviseur)
    // console.log(NBR);
    let l = []
    let vase=[]
    for (let i = 0;i<L.length;i++){
        if (vase.length==NBR){
            l.push(vase)
            vase = []
        }
        vase.push(L[i])
        
    }
    if (vase.length!=0){
        l.push(vase)
    }
    return l
}

// console.log(chunk(["yo","sa","marche?","OUAIP","proute","hahahaha"],1));