const time = new Date()


// function verifyUser() {
//     alert('Welcome, enter your details to obtain your licence')
//     let name = prompt('Enter your name')
//     let occupation = prompt('What is your occupation')
//     let getDate = prompt('Enter your birth date')
//     let verify = time.getFullYear() - getDate 

//     if(verify > 18) {
//         console.log('Congrats!! You are eligible')
//         console.log(`
//             ----LICENCE----\n
//             \n
//             Name: ${name}\n
//             Age: ${verify}\n
//             Occupation: ${occupation}
//         `)
//     } else {
//         let ageGap = 18 - verify 
//         console.log(`You are not 18 yet, try again in ${ageGap} years`)
//     }
// }

// verifyUser()

// let getAge = prompt('Enter your age to know how long you have lived')

// let days = getAge * 365
// let hours = days * 24
// let minutes = hours * 60
// let seconds = minutes * 60

// console.log(`
//     You have lived for:\n
//     ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds
// `)


// -----EVEN & ODD NUMBER CHALLENGE-------
// let enterNum = prompt('Enter a number:')
// if(enterNum % 2 == 0){
//     console.log(`${enterNum} is an even number`)
// } else if(enterNum % 2 !=0) {
//     console.log(`${enterNum} is an odd number`)
// }


//---------GRADE CHECKER CHALLENGE--------------
// let enterGrade = prompt('Enter your score:')
// if(enterGrade >= 80){
//     console.log('Your grade is A')
// } else if(enterGrade >= 70 && enterGrade <= 89) {
//     console.log('Your grade is B')
// } else if(enterGrade >= 69 && enterGrade <= 69) {
//     console.log('Your grade is C')
// } else if(enterGrade >= 50 && enterGrade <= 59) {
//     console.log('Your grade is D')
// } else if(enterGrade >= 0 && enterGrade <= 49) {
//     console.log('Your grade is F')
// }


//-------------SEASON CHECKER CHALLENGE-------------
// let enterMonth = prompt('Enter a month:')

// if(enterMonth == 'September' || enterMonth == 'October' || enterMonth == 'November'){
//     console.log(`Since the month is ${enterMonth}, the season is Autumn`)
// } else if(enterMonth == 'December' || enterMonth == 'January' || enterMonth == 'Febuary'){
//     console.log(`Since the month is ${enterMonth}, the season is Winter`)
// } else if(enterMonth == 'March' || enterMonth == 'April' || enterMonth == 'May'){
//     console.log(`Since the month is ${enterMonth}, the season is Spring`)
// } else if(enterMonth == 'June' || enterMonth == 'July' || enterMonth == 'August'){
//     console.log(`Since the month is ${enterMonth}, the season is Summer`)
// }

// const month = {
//     spring: ['March', 'April', 'May'],
//     autumn: ['September', 'October', 'November'],
//     winter: ['December', 'January', 'Febuary'],
//     summer: ['June', 'July', 'August']
// }

// if(Object.values(month.spring).includes(enterMonth)) {
//     console.log(`Since the month is ${enterMonth}, the season is spring`)
// } else if (Object.values(month.autumn).includes(enterMonth)) {
//     console.log(`Since the month is ${enterMonth}, the season is autumn`)
// } else if (Object.values(month.winter).includes(enterMonth)) {
//     console.log(`Since the month is ${enterMonth}, the season is winter`)
// } else if (Object.values(month.summer).includes(enterMonth)) {
//     console.log(`Since the month is ${enterMonth}, the season is summer`)
// }
//---------Looping Through An Array Assigned to an object key---------------
// Object.values(month).forEach(element => {
//     for(let i in element) {
//         console.log(element[i])
//     }
// });




//------------CHECK WORKING DAY CHALLENGE-------------
// let day = prompt('Enter a day:')
// if(day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
//     console.log(`${day} is a working day`)
// } else if (day == 'Saturday' || day == 'Sunday') {
//     console.log(`${day} is a weekend`)
// }

// let weekDays = {
//     workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekends: ['Saturday', 'Sunday']
// }

// if(Object.values(weekDays.workingDays).includes(day)) {
//     console.log(`${day} is a working day`)
// } else if (Object.values(weekDays.weekends).includes(day)) {
//     console.log(`${day} is a weekend`)
// }


// const cars = ['Honda', 'Ferarri', 'Mercedes', 'Lamboghini', 'Audi', 'Maserati', 'Volskwagon']
// let checkCar = prompt('Enter a car:')


// cars.indexOf(checkCar) !== -1 ? console.log('The car is present') : cars.push(checkCar)
// console.log(cars)

// console.log(cars.join(', '))
// console.log(cars.slice(2,6))
// cars.splice(2, 3, 'Ford', 'Civic', 'Infiniti')
// cars.shift()
// console.log(cars)

// const letter = ['apple', 'carton', 'zebra', 'ball', 'deal']
// letter.sort()
// console.log(letter)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let ageMedian = ages.slice(4,6)
let median =  ageMedian.reduce((a, b) => a + b, 0) / ages.length
console.log(median)
