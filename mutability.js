/*
const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
*/
const clone1 = {
    name:person.name,
    age:person.age,
    country: person.country
}
const clone2 = {
    name:person.name,
    age:person.age,
    country: person.country
}
const samePerson= person
person.age++
person.country = "FR"
/*
console.log(clone1)
console.log(clone2)
console.log(samePerson)
console.log(person)
*/