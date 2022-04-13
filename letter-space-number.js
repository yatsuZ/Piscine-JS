// \s=Matches whitespace characters: [\t\n\f\r\p{Z}]
// \d=Matches digits: [0-9]
// \W=Matches non-alphanumeric characters: [^\w]

let verif= /\w\s\d\b/g//ma condition Regular expression

const letterSpaceNumber =(S)=>{
    let l=[]
    l = S.match(verif)
    if (l==null){
        return []
    }
    return l
}
// console.log(letterSpaceNumber('I like 7up.'), [])