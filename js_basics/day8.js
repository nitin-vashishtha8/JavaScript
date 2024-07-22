// tamplate literals


// const intro = {name: "Nitin Vashishtha",age: 20}
  
// const greetings = `Hello I'm ${intro.name} and I'm ${intro.age} years old`

// console.log(greetings)

let completeIntro = `
My name is Nitin Vashishtha,
you can also call me as Nit Sharma.
I uses Nit when I write poetries because it gives unmatching vibes`

// console.log(completeIntro)

// array destructing

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [firstNum, secondNum, thirdNum, ...rest] = numArray

// console.log(firstNum)
// console.log(secondNum)
// console.log(thirdNum)

const book = {
    title: "Atomic Habits",
    author: "James Caler",
    publishYear: 2019
}

const {title, author, publishYear} = book

// console.log(title)  
// console.log(publishYear)

const num = [1, 2, 3, 4, 5, 6]
const num2 = [8, 12, 9, 10]

const combine = [... num, ... num2]

// console.log(combine)

function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0)
}

// console.log(sum(1, 2, 3, 4))

function productTwo(num1, num2 = 1) {
    return num1*num2
}

const resultwithtwo = productTwo(3, 6)
// console.log(resultwithtwo)

const withoutSecond = productTwo(13)
// console.log(withoutSecond)

let name = `Nit`
let age = 20
let city = `Jaipur`


let intro = {
name,
age,
city,
greet () {
    console.log(`Hello, I'm ${this.name}`)
},
fullIntro: () => `{this.name} from ${intro.city}`
}

// console.log(intro)

let stName = `firstname`
let studeName = `Nit`

let student = {
    [stName]: studeName
}
console.log(student)