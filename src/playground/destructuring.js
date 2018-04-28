//
// Object destructuring
//

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};
// regular
console.log(`${person.name} is ${person.age}.`);
if (person.location.city && person.location.temp) {
    console.log(`It is ${person.location.temp} degrees in ${person.location.city}`);
}
// ES6 destructuring
const { name, age, height = 'tall', mindset: personality = 'happy go lucky' } = person;
const { city, temp: temperature } = person.location;
console.log(`${name} is ${age}, ${height} and ${personality}.`)
if (city && temperature) {
    console.log(`It is ${temperature} degrees in ${city}`);
}

// Exercise

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}
const { name: pubName = 'Self-published' } = book.publisher;
console.log(`${pubName}`);

//
// Array destructuring
//

const address = ['1702 McGuire Avenue', 'North Vancouver', 'BC', 'V7P3B1'];
console.log(`You are in ${address[1]}, ${address[2]}`);

const [, cityName, province = 'ON'] = address;
console.log(`You are in ${cityName}, ${province}`);

// Exercise

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];
const [itemName, smallPrice, mediumPrice, hotPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);