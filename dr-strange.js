const semaine = [
    "Monday","Tuesday","Wednesd","Thursday","Friday","Saturday","Sunday",
    "secondMonday","secondTuesday","secondWednesd","secondThursday","secondFriday","secondSaturday","secondSunday",
]
const addWeek = (s)=>{
    const ajd= (s.getFullYear()*365+s.getMonth()*30+s.getDate())%14
    console.log(ajd);
    for (let  i = 0;i<semaine.length;i++){
        if (i==ajd){
            return semaine[i]
        }
    }
}
const s = new Date('0001-01-01')
console.log(s.getDate(),s.getMonth(),s.getFullYear());
console.log(addWeek(s));