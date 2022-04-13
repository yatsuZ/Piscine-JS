// \s=Matches whitespace characters: [\t\n\f\r\p{Z}]
// \d=Matches digits: [0-9]
// \W=Matches non-alphanumeric characters: [^\w]

let verif=new RegExp('/\w\s\d\b/g')//ma condition Regular expression

const letterSpaceNumber =(S)=>{
    return S.match(verif)
}
// console.log(letterSpaceNumber("du coup es que sa marche 1?"));//non sa marche pas >:(