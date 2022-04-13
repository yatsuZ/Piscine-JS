// let r7 = /[aeiou]/ig;
// const vowelDots = (s)=>{
//     return s.replace(r7,".")
// }
// console.log(vowelDots("a"));
let vowels = /[aeiou]/ig;
const vowelDots = (s)=>{
    let l = s.match(vowels)
    let Ind =0
    if (l!=null){
        for (let i=0;i<s.length;i++){
            if (l[Ind]==s[i]){
                s=s.replace(l[Ind],l[Ind]+".")
                Ind++
            }
        }
    }
    return s
}
// console.log(vowelDots('rhythm'), 'rhythm');