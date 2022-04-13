// let r7 = /[aeiou]/ig;
// const vowelDots = (s)=>{
//     return s.replace(r7,".")
// }
// console.log(vowelDots("a"));
let r7 = /[aeiou]/ig;
const vowelDots = (s)=>{
    let l = s.match(r7)
    let Ind =0
    for (let i=0;i<s.length;i++){
        if (l[Ind]==s[i]){
            s=s.replace(l[Ind],l[Ind]+".")
        }
    }
    return s
}
// console.log(vowelDots("a"));