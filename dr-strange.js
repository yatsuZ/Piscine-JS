const semaine = [
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    "secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday",
]
const addWeek = (s)=>{
    const ajd= ((s.getMonth()*30+s.getDate())%14)-1 
    // console.log(ajd);
    for (let  i = 0;i<semaine.length;i++){
        if (i==ajd){
            return semaine[i]
        }else if (ajd==-1){
            return semaine[13]
        }
    }
}
// const monday = new Date('0001-01-01')
// console.log(monday.getDate(),monday.getMonth(),monday.getFullYear());
// console.log(addWeek(monday));
// const wensday = new Date('0001-01-03')
// console.log(wensday.getDate(),wensday.getMonth(),wensday.getFullYear());
// console.log(addWeek(wensday));
const wensday = new Date('0001-01-03')
console.log(wensday.getDate(),wensday.getMonth(),wensday.getFullYear());
console.log(addWeek(wensday));