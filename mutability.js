
const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }

const clone1 = {
    name:person.name,
    age:person.age,
    country: person.name
}
const clone2 = {
    name:person.name,
    age:person.age,
    country: person.name
}
const samePerson= {
    name:person.name,
    age:person.age,
    country: person.name
}
person.age++
person.country = "FR"
console.log(clone1)
console.log(clone2)
console.log(samePerson)
console.log(person)
