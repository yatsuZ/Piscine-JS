const sameAmount = (s,regx1,regx2)=>{
    const a =s.match(regx1).length
    const b =s.match(regx2).length
    console.log(a);
    return (a==b)
}

const data ="hello how are you hello how are you hello how are you qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd"
console.log(sameAmount(data, /h/, /w/));
