const RNA = (DN) =>{
    let a = ""
    if (DN[2]=="T"){
        a +="U"
    }else{
        a+=DN[2]
    }
    if (DN[1]=="T"){
        a +="U"
    }else{
        a+=DN[1]
    }
    if (DN[4]=="T"){
        a +="U"
    }else{
        a+=DN[4]
    }
    if (DN[3]=="T"){
        a +="U"
    }else{
        a+=DN[3]
    }
    return a
}

const DNA = (RN)=>{
    let a = ""
    if (RN[2]=="U"){
        a +="T"
    }else{
        a+=RN[2]
    }
    if (RN[1]=="U"){
        a +="T"
    }else{
        a+=RN[1]
    }
    if (RN[4]=="U"){
        a +="T"
    }else{
        a+=RN[4]
    }
    if (RN[3]=="U"){
        a +="T"
    }else{
        a+=RN[3]
    }
    return a
}