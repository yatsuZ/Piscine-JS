/*
const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
*/
const namev = person.name
const ageClone1 = person.age +2
const ageClone2 = person.age +2

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
const samePerson= {
    name:person.name,
    age:person.age,
    country:'FR'
}
/*
console.log(clone1)
console.log(clone2)
console.log(samePerson)
*/