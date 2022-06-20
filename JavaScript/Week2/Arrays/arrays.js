let animals = [ 
    {name: 'dog', breed: 'mammal'}, 
    {name: 'goat', breed: 'mammal'},
    {name: 'snake', breed: 'reptile'},
    {name: 'frog', breed: 'amphibian'}
]


for (let animal in animals) {
    console.log(`The animal name is ${Object.values(animals[animal])[0]} and the breed is ${Object.values(animals[animal])[1]}`)
}



function addAnimal(name, breed) {
    alert("Add an animal to the database")
   
    let animalDetails = {}
    animalDetails['name'] = prompt("Enter Animal Name")
    animalDetails['breed']= prompt('Enter Animal Breed')
    
    animals.push(animalDetails)
    console.log(animals)
}

addAnimal()