const os = require('os');
const fs = require('fs');

console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());

const gender = ['M', 'F'];
const maleName = ['Andrzej', 'Zenek', 'Jan', 'Gienek'];
const femaleName = ['Zofia', 'Krystyna', 'Anna', 'Maria'];
const lastName = ['Kowalski', 'Nowak', 'Graczyk', 'Malinowski'];

const randChoice = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
};

const people = [];

for (let i=0; i<20; i++) {
    const person = {
        gender: randChoice(gender),
    };

    if (person.gender === 'M'){
        person.name = randChoice(maleName);
    }
    else {
        person.name = randChoice(femaleName);
    }

    person.lastName = randChoice(lastName);
    person.age = Math.floor((Math.random()*61 + 18));
    person.email = (person.name + '.' + person.lastName + '@gmail.com')
    people.push(person);
}

const peopleJson = JSON.stringify(people);

fs.writeFile('people.json', peopleJson, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
});