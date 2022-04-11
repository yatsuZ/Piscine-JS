
const split = (L,seperateur) =>{
    const m = seperateur
    let l = []
    let element = ""
    let fin=0
    if (m==undefined){
        l.push(L)
    }else if (m=="" || m==''){
        
        for (let i =0;i<L.length;i++){
            element += L[i]
            l.push(element)
            element =""
        }
    }else{
        for (let i =0;i<L.length;i++){
            
            fin = m.length+i

            if (L.slice(i,fin)!=m){
                element += L[i]
            }else{
                l.push(element)
                element=""
                i=fin-1
            }
        }
        l.push(element)
    }
    return l
}

const join = (L,rassemblement)=>{
    let exit = ""
    for (let i = 0;i<L.length;i++){
        exit+=L[i]
        if (i<L.length-1){
            exit += rassemblement
        }
    }
    return exit
}

// const test = ['ee', 'ff', 'g', ''] 
// console.log(join(test,','))