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

//___________________________________________________________________________
// Getting last index of an element in array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 3, 1, 2]

// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5)) // true
// console.log(numbers.includes(0)) // false
// console.log(numbers.includes(1)) // true
// console.log(numbers.includes(6)) // false

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ] // List of web technologies

// console.log(webTechs.includes('Node')) // true
// console.log(webTechs.includes('C')) // false

// Checking array

// Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

// Joining array elements

// join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// const names = ['claudio', 'Marcio', 'lira', 'de holanda']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ] // List of web technologies

// console.log(webTechs.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

// Slice array elements

// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.slice()) // -> it copies all  item
// console.log(numbers.slice(0)) // -> it copies all  item
// console.log(numbers.slice(0, numbers.length)) // it copies all  item
// console.log(numbers.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position

// Splice method in array

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.splice()) // -> remove all items

// const numbers1 = [1, 2, 3, 4, 5]
// console.log(numbers1.splice(0, 1)) // remove the first item

// const numbers2 = [1, 2, 3, 4, 5, 6]
// console.log(numbers2.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//________________________________

//  --- Adding item to an array using push --- 

// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
// const arr = ['item1', 'item2', 'item3']
// arr.push('new item')

// console.log(arr)
// // ['item1', 'item2','item3','new item']

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)

// console.log(numbers) // -> [1,2,3,4,5,6]

// numbers.pop() // -> remove one item from the end
// console.log(numbers) // -> [1,2,3,4,5]

// let fruits = ['banana', 'orange', 'mango', 'lemon']
// fruits.push('apple')

// console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

// fruits.push('lime')


// console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// --- Removing the end element using pop --- 

// pop: Removing item in the end.

// const numbers = [1, 2, 3, 4, 5]
// numbers.pop() // -> remove one item from the end

// console.log(numbers) // -> [1,2,3,4]

// --- Removing an element from the beginning ----

// shift: Removing one array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.shift() // -> remove one item from the beginning

// console.log(numbers) // -> [2,3,4,5]

// ---- Add an element from the beginning ----

// unshift: Adding array element in the beginning of the array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0) // -> add one item from the beginning

// console.log(numbers) // -> [0,1,2,3,4,5]

// ---- Reversing array order ----

// reverse: reverse the order of an array.

// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse() // -> reverse array order

// console.log(numbers) // [5, 4, 3, 2, 1]

// numbers.reverse()
// console.log(numbers) // [1, 2, 3, 4, 5]

// ---- Sorting elements in array ----

// sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ]

// webTechs.sort()
// console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

// webTechs.reverse() // after sorting we can reverse it
// console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// webTechs.shift() // Remove o primeiro item
// console.log(webTechs)

// ---- Array of arrays ----

// Array can store different data types including an array itself. Let us create an array of arrays

// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray = [
//   [1, 2, 3],
//   [1, 2, 3],
// ]
// console.log(arrayOfArray[0]) // [1, 2, 3]

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]

// console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
// console.log(fullStack.length) // 2
// console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
// console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

// ---- 💻 Exercise ----
// Exercise: Level 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]


// Declare an empty array;
const arr = []
console.log(arr)


// Declare an array with more than 5 number of elements
const a = ['j','a','v','a','s','c','r','i','p','t']
console.log(a)


// Find the length of your array

console.log(a.length)
// Get the first item, the middle item and the last item of the array

const first = a[0]
const middle = a[4]
const last = a[9]

console.log(last)
console.log(middle)
console.log(first)
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies


