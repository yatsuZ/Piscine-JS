const RNA = (DN) =>{
    let a = ""
    for (let i=0;i<DN.length;i++){
        if (DN[i]=="G"){
            a+="C"
        }else if (DN[i]=="C"){
            a+="G"
        }else if (DN[i]=="T"){
            a+="A"
        }else if (DN[i]=="A"){
            a+="U"
        }
    }
    return a
}

const DNA = (RN)=>{
    let a = ""
    for (let i=0;i<RN.length;i++){
        if (RN[i]=="G"){
            a+="C"
        }else if (RN[i]=="C"){
            a+="G"
        }else if (RN[i]=="A"){
            a+="T"
        }else if (RN[i]=="U"){
            a+="A"
        }
    }
    return a
}