const semaine = [
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    "secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday",
]

const addWeek = (s)=>{
    let ajd= (s.getDate()-1)%14
    if (s.getFullYear()>=2000){
        ajd-=3
    }
    for (let  i = 0;i<semaine.length;i++){
        if (i==ajd){
            return semaine[i]
        }
    }
}
// const monday = new Date('0001-01-01')
// console.log(monday.getFullYear(),"m",monday.getMonth(),"m",monday.getDate(),"m",monday.getDay(),"m",monday.getSeconds());
// console.log(addWeek(monday));
// const wensday = new Date('2000-01-03')
// console.log(wensday.getDate(),wensday.getMonth(),wensday.getFullYear(),wensday.getSeconds());
// console.log(addWeek(wensday));
// const secondMonday = new Date('2025-08-11')
// console.log(secondMonday.getDate(),secondMonday.getMonth(),secondMonday.getFullYear(),secondMonday.getSeconds());
// console.log(addWeek(secondMonday));