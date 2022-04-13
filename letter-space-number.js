let verif= /\w\s\d\b/g//ma condition Regular expression
//\w=une letrre 
const letterSpaceNumber =(S)=>{
    let l=[]
    l = S.match(verif)
    if (l==null){
        return []
    }
    return l
}
// console.log(letterSpaceNumber('I like 7up.'), [])