// let animals = [ 
//     {name: 'dog', breed: 'mammal'}, 
//     {name: 'goat', breed: 'mammal'},
//     {name: 'snake', breed: 'reptile'},
//     {name: 'frog', breed: 'amphibian'}
// ]


// for (let animal in animals) {
//     console.log(`The animal name is ${Object.values(animals[animal])[0]} and the breed is ${Object.values(animals[animal])[1]}`)
// }



// function addAnimal(name, breed) {
//     alert("Add an animal to the database")
   
//     let animalDetails = {}
//     animalDetails['name'] = prompt("Enter Animal Name")
//     animalDetails['breed']= prompt('Enter Animal Breed')
    
//     animals.push(animalDetails)
//     console.log(animals)
// }

// addAnimal()

// alert('Welcome to the tempreture converter')

// let defaultTemp = 45
// let convert = prompt(`The tempereture for today is ${defaultTemp} degrees\nType CEL to convert to Celcuis and KEL to convert to Kelvin`)

// if(convert == 'CEL') {
//     let celcuis = (defaultTemp - 32) * 5/9
//     alert(`The tempereture in celcuis is ${celcuis} degrees`)
// } 
// else if (convert == 'KEL') {
//     let kelvin = (defaultTemp + 459.67) * 5/9
//     alert(`The tempereture in kelvin is ${kelvin} degrees`)
// }

// let isGuestOneVegan = false
// let isGuestTwoVegan = false

// if(isGuestOneVegan && isGuestTwoVegan) {
//     console.log('Both are vegan')
// } else if (isGuestOneVegan || isGuestTwoVegan) {
//     console.log('One is vegan')
// } else if (!isGuestOneVegan && !isGuestTwoVegan) {
//     console.log('None is vegan')
// }

// function tipCalculator (tipPercent = 0.2) {
//     let total = prompt('Enter your total bill amount')

//     let result = total * tipPercent
//     return alert(`Your tip ampount is: ${result}`)
// }

// tipCalculator(0.4) 

const profileMap = new Map()

profileMap.set('State', "Anambra")
profileMap.set('Age', 23)
profileMap.set('Name', "Okafor Alvin")

console.log(profileMap)

let arrayMap = Array.from(profileMap)
console.log(arrayMap)

let objectMap = Object.fromEntries(profileMap)
console.log(objectMap)


const user = {
    fullname: 'Alvin Chinedu Okafor',
    username: 'alvinchinedu',
    email: 'alvin2k99@gmail.com',
    password: 'okviofcn00643czl'
}

let getUserName = ({fullname, username, email, password}) => {
    console.log(`The fullname is ${fullname}`)
    console.log(`The username is ${username}`)
    console.log(`The email is ${email}`)
}

getUserName(user)
