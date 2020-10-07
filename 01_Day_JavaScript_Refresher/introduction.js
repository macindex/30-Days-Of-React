// console.log('Welcome to 30DaysOfJavaScript claudio')



// let firstName = 'Asabeneh'
// firstName = 'Eyob'

//const PI = 3.14 // Not allowed to reassign PI to a new value
// PI = 3.

// ARRAY



// Using Array constructor

// syntax
// const arr = Array()
// or
// let arr = new Array()
// console.log(arr) // []

    // Using square brackets([])

// syntax
// This the most recommended way to create an empty list
// const arr = []
// console.log(arr)

// How to create an array with values

// Array with initial values. We use length property to find the length of an array.

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// const set = [numbers, fruits, vegetables, animalProducts, webTechs, countries]

// console.log(set)
//_______________________________________________________
// Creating an array using split

// let js = 'JavaScript'
// const charsInJavaScript = js.split('')

// console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')

// // Meu exemplo

// let atividadesDoDia = 'Escovar os dentes, Tomar café, estudos da faculdade, Estudos Angular, Estudos Django, Estudos ReactJS'
// const atividades = atividadesDoDia.split(',')

// console.log(atividades)

// console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
// let txt =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = txt.split(' ')

// console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]



// console.log('Welcome to 30DaysOfJavaScript claudio')


//3 - Arrays


// Using Array constructor

// syntax
// const arra = Array()
// or
// let arr = new Array()
// console.log(arra) // []

// Using square brackets([])

// syntax
// This the most recommended way to create an empty list
// const arr = []
// console.log(arr)


// How to create an array with values

// Array with initial values. We use length property to find the length of an array.

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

// Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
// Number of numbers: 6
// Fruits: ['banana', 'orange', 'mango', 'lemon']
// Number of fruits: 4
// Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
// Number of vegetables: 5
// Animal products: ['milk', 'meat', 'butter', 'yoghurt']
// Number of animal products: 4
// Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
// Number of web technologies: 7
// Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']
// Number of countries: 5

// Array can have items of different data types


// const arr = [
//   'Claudio',
//   250,
//   true,
//   { country: 'Finland', city: 'Helsinki' },
//   { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
// ] // arr containing different data types
// console.log(arr)

// Accessing array items using index

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0] // we are accessing the first item using its index

// console.log(firstFruit) // banana

// secondFruit = fruits[1]
// console.log(secondFruit) // orange

// let lastFruit = fruits[3]
// console.log(lastFruit) // lemon
// Last index can be calculated as follows

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]

// console.log(lastFruit) // lemon

// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers
// const num = numbers.split('')
// console.log(numbers)

// let arrayDeNum = ('abalarantananaxi')
// const arr = arrayDeNum.split([','])

// console.log(arr)
// console.log(numbers.length) // => to know the size of the array, which is 6
// console.log(numbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]

// console.log(numbers[0]) //  -> 0
// console.log(numbers[5]) //  -> 100

// let lastIndex = numbers.length - 1
// console.log(numbers[lastIndex]) // -> 100

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ] // List of web technologies

// console.log(webTechs) // all the array items
// console.log(webTechs.length) // => to know the size of the array, which is 7
// console.log(webTechs[0]) //  -> HTML
// console.log(webTechs[6]) //  -> MongoDB

// let lastIndex = webTechs.length - 1
// console.log(webTechs[lastIndex]) // -> MongoDB

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// List of countries

// console.log(countries) // -> all countries in array
// console.log(countries[0]) //  -> Albania
// console.log(countries[10]) //  -> Kenya

// let lastIndex = countries.length - 2
// console.log(countries[lastIndex]) //  -> japan

// const shoppingCart = [
//   'Milk',
//   'Mango',
//   'Tomato',
//   'Potato',
//   'Avocado',
//   'Meat',
//   'Eggs',
//   'Sugar'
// ] // List of food products

// console.log(shoppingCart) // -> all shoppingCart in array
// console.log(shoppingCart[0]) //  -> Milk
// console.log(shoppingCart[7]) //  -> Sugar

// let lastIndex = shoppingCart.length - 1
// console.log(shoppingCart[lastIndex]) //  -> Sugar

// Modifying array element

// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10 // changing 1 at index 0 to 10
// numbers[1] = 20 // changing  2 at index 1 to 20

// console.log(numbers) // [10, 20, 3, 4, 5]

// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya',
// ]

// countries[0] = 'Afghanistan' // Replacing Albania by Afghanistan
// let lastIndex = countries.length - 1
// countries[lastIndex] = 'Korea' // Replacing Kenya by Korea

// console.log(countries)

// Methods to manipulate array


// . Array Constructor .

// Array:To create an array.

// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightEmptyValues = Array(8) // it creates eight empty values
// console.log(eightEmptyValues)

// Concatenating array using concat
// const primeiraLista = ['Tu', 'tem', 'cara']
// const segundaLista = ['de', 'camelo', 'com', 'cavalo']
// const juncao = primeiraLista.concat(segundaLista)

// console.log(juncao)

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList) // [1, 2, 3, 4, 5, 6]
//______________________________________________

// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables) // concatenate the two arrays

// console.log(fruitsAndVegetables)


// Getting array length

// Length:To know the size of the array

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length) // -> 5 is the size of the array


// Getting index of an element in an array

// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1


// Check items in a list

// let us check if a banana exist in the array

// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana') // 0

// if (index == 0) {
//   console.log('This fruit does exist in the array')
// } else {
//   console.log('This fruit does not exist in the array')
// }
// This fruit does exist in the array

// we can use also ternary here
// index != -1
//   ? console.log('This fruit does exist in the array')
//   : console.log('This fruit does not exist in the array')

// let us check if a avocado exist in the array
// let indexOfAvocado = fruits.indexOf('avocado') // -1, if the element not found index is -1
// if (indexOfAvocado != -1) {
//   console.log('This fruit does exist in the array')
// } else {
//   console.log('This fruit does not exist in the array')
// }
// This fruit does not exist in the arra




