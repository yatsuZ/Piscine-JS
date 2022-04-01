/*
const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
*/
const namev = person.name
const ageClone1 = person.age 
const ageClone2 = person.age

const clone1 = {
    name:namev,
    age:ageClone1,
    country: 'FR'
}
const clone2 = {
    name:namev,
    age:ageClone2,
    country: 'FR'
}
const samePerson= person
/*
console.log(clone1)
console.log(clone2)
console.log(samePerson)
*/