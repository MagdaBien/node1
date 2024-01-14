const fs = require('fs');

const genders = ['male' , 'female', 'female', 'female', 'male', 'male', 'female', 'male'];
const femaleNames = ['Anna', 'Kate', 'Angelika', 'Janet', 'Barbara', 'Betty', 'Jesica', 'Dorota', 'Agata', 'Paulina', 'Merry'];
const maleNames = ['Kohn', 'Janusz', 'Piotr', 'Sylvester', 'Braian', 'Donald', 'Alex', 'Waldemar', 'Jan', 'Paul', 'January'];
const lastNames = ['Pietruszka', 'Marchewka', 'Black', 'Chudy', 'Gruby', 'Kowal', 'Smith', 'Malinowsy', 'Kowalsky', 'Skowronek', 'Birdson'];
const persons = [];

function randChoice(myArray)
{
    const index = randomInt(0, myArray.length-1)
    return myArray[index];
}

function randomInt(min=0, max) {
	return min + Math.floor((max - min) * Math.random());
}

function getName(gender)
{
    if(gender === 'male') { 
        return randChoice(maleNames); 
    }
    else {  
        return randChoice(femaleNames); 
    }
}

for (let i=0; i<20; i++) {
    let chosenGender = randChoice(genders);
    const person = {
        id: i+1,
        gender: chosenGender,
        name: getName(chosenGender),
        lastName: randChoice(lastNames),
        age: randomInt(18, 90)
    }
    persons.push(person);
}

console.log(persons);
const personsJSON = JSON.stringify(persons);
console.log(personsJSON);

fs.writeFile('people.json', personsJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });