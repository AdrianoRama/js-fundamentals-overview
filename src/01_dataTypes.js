/**
 * @description This is a test to see how well you understand data types in javascript.
 * Write your solutions right below the comments. Use any tools you need to check the answers
 *
 * Don't remove the comments, Ed needs to know what's going on.
 *
 * As tempting as it may be, don't look in the previous exercises for answers. I don't care if you can open them.
 * I care if you can do these yourself 😊
 *
 * If you get stuck on a task - that's good. It means that we're not wasting time here.
 * Note it and skip it. We will later cover it in a 1x1 session and make sure you udnerstand it :P
 */

// 1. create a constant called 'pi' and assign it the value of 3.14

const pi = 3.14

// 2 create a variable called 'radius' and assign it the value of 10

let radius = 10
// 2.1 now, change its value to 20

radius = 20

// 3. create a variable called 'area' and calculate the area using your variables
//   The formula is: area = pi x radius-squared

let area = (pi * radius) - (radius * radius)
console.log(area)

// 4. Create an array called 'garage' with these cars inside:
//   - volvo
//   - audi
//   - mercedes
//   - bmw

let garage = ['volvo', 'audi', 'mercedes', 'bmw']

// Now, without manually typing the array:
// 4.1 add 'ferrari' to the garage

// 4.2 remove Mercedes from the array

// 4.3 replace the 2nd car in the array with 'lada'

// 4.4 create an array with all of the cars in the garage capitalized

// 4.5 find the volvo. pretend you don't know what the array looks like.

garage.push('ferrari')

garage = garage.filter(car => car !== 'mercedes')

garage[1] = 'lada'

garage = garage.map(car => car.toUpperCase())


let i = garage.findIndex(() => 'volvo')
let found = garage[i]

// 5 Create an object called 'myself' with these properties and assign them your values.
// Use appropriate datatypes for the values:
//   - name
//   - age
//   - isHungry
//   - favouriteAnimal

const myself = {
    name: 'Adriano',
    age: 29,
    isHungry: true,
    favouriteAnimal: 'Dog'
}

// 5.1 Replace the favouriteAnimal with 'turtle'

myself.favouriteAnimal = 'turtle'

// 5.2 add an address property, which tracks your city, country and street name

myself.city = 'Elbasan'
myself.country = 'Albania'
myself.streetName = 'Kadri Gani'


// 5.3 add a list of favouriteFoods to the object. Add your favourite foods to the list (duhhh!)

myself.favouriteFoods = ['sushi', 'pizza', 'filet mignon', 'cheese cake']

// 5.3 remove the age property

delete myself.age

// 5.4 Have a snack. Set isHungry to false (even if you're not really hungry).

myself.isHungry = false
// 5.5 Add a function to the object called 'eat'. It should take a food as an argument and return "Name ate food!"
// That's a mouthful, so here's an example:
// e.g. calling the eat function with a banana argument, in an object where the name is 'Nico' should return "Nico ate banana!"
// e.g. calling the eat function with an apple argument, in an object where the name is 'Ilir' should return "Ilir ate apple!"

function eat(food) {
    return `${myself.name} ate ${food}!`
}

eat('banana')
