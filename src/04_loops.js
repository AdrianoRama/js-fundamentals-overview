/**
 * This is a test to see how well you understand loops in javascript.
 *
 */

// This is sample data. Don't modify it. You will need to use it though:
const Elidon = Object.freeze({
  name: "Elidon",
  id: 1,
  hobbies: ["Memes", "Ed's haircut", "Visard's jokes"]
});
const Artiola = Object.freeze({
  name: "Artiola",
  id: 2,
  hobbies: ["Cats", "Chatting"]
});
const Marsel = Object.freeze({
  name: "Marsel",
  id: 3,
  hobbies: ["Basketball", "Being pretty tall"]
});
const Visard = Object.freeze({
  name: "Visard",
  id: 4,
  hobbies: ["Fishing", "Real estate", "Being very freaking tall"]
});
const Rinor = Object.freeze({
  name: "Rinor",
  id: 5,
  hobbies: ["Dogs", "Teaching", "Challenging himself"]
});

const data = Object.freeze({
  people: [Elidon, Artiola, Marsel, Visard, Rinor]
});

// 1. Print out the name of each person in the data object.
// 1.1 There are many ways to achieve the above. Try to think of another way.
let names = data.people.map(person => person.name)
console.log(names)

// 2. Count the total number of hobbies

let nrOfHobbies = data.people.map(person => person.hobbies.length)

let sum = 0

nrOfHobbies.map(nr => sum += nr)

console.log(sum)

// 3. Create a mutable copy of Visard and change his name to "Visard of Oz"

// let visard = names.filter(name => name === 'Visard')

let newVisard = { ...Visard }

newVisard.name = "Visard of Oz"

console.log(newVisard)

// 4. Capitalise all hobbies in the data object


for (const person of data.people) {
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
  }
}


// 5. Create a new object called "peopleByName" and add all the people from the data object to it. It should look like this:
// peopleByName = {
//   Ed: { name: Ed, id: 6, hobbies: ["Drawing birds", "Shitposts", "Muay thai"] },
//   Nico: { name: Nico, id: 7, hobbies: ["Coding", "Learning Japanese", "Being pretty lit"] },
//   ...etc
// }
//

// let peopleByName = {}

// data.people.map(person => {
//   // Object.assign(peopleByName, person)
//   peopleByName = { ...person }
// })


// console.log(peopleByName)