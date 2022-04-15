const semaine = [
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    "secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday",
]

const nbr_de_Jour_par_Mois = (mois) =>{
    if (mois==0){
        return 0
    }else if (mois==1 || mois ==3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12  ){
        return nbr_de_Jour_par_Mois(mois-1)+31
    }else if (mois==4 || mois ==6 || mois == 9 || mois == 11){
        return nbr_de_Jour_par_Mois(mois-1)+30
    }else {
        return nbr_de_Jour_par_Mois(mois-1)+29
    }
}
const bissextile = (year) =>{
    if (year%100==0 && year%400!=0){
        return 365
    }else if (year%4==0 || year%400!=0){
        return 366
    }else{
        return 365
    }
}
//samedi, 1 janvier 2000 decallage de 4
const decalage = (d)=>{
    if (d<=1){
        return -1
    }else{
        return (decalage(d-1)+bissextile(d))%7
    }
}


//idée : prendre le nombre de jour qu'il y a 
const addWeek = (s)=>{
    let ajd= (decalage(s.getFullYear())+nbr_de_Jour_par_Mois(s.getMonth())+s.getDate())%14
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