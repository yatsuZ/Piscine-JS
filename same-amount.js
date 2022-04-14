const sameAmount = (str,regx1,regx2)=>{
    const r1=RegExp(regx1,'g')
    const r2=RegExp(regx2,'g')
    const match1 =[...str.matchAll(r1)]
    console.log(match1);
    const match2 =[...str.matchAll(r2)]
    console.log(match2);
    return (match1==null || match2==null ? false :match1.length==match2.length)
}


