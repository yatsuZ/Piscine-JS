const sameAmount = (s,regx1,regx2)=>{
    console.log(s);
    return s.search(regx1).length==s.search(regx2).length
}

const data ="hello how are you hello how are you hello how are you qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd"
console.log(sameAmount(data, /h/, /w/));
