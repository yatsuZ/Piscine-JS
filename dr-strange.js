const semaine = [
    "Monday","Tuesday","Wednesd","Thursday","Friday","Saturday","Sunday",
    "secondMonday","secondTuesday","secondWednesd","secondThursday","secondFriday","secondSaturday","secondSunday",
]
const addWeek = (an,mois,jour)=>{
    const ajd= (an*365+mois*30+jour)%14
    for (let  i = 0;i<semaine.length;i++){
        if (i==ajd){
            return semaine[i]
        }
    }
}