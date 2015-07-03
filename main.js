// 1. getName
// *********************************************


// var getName = function(person) {

// 	return person.name;
// 	// or
// 	// return person['name']

// }

// console.log(getName({ name: 'Luisa', age: 25 }))


// 2. totalLetters
// *********************************************


// var stringWords = ['This', 'shit', 'is', 'really', 'starting', 'to', 'piss', 'me', 'off']

// var totalLetters = 0

// for(i = 0; i < stringWords.length; i++) {
// 	totalLetters+=stringWords[i].length;
// }

// console.log(totalLetters);

// 3. keyValue
// *********************************************


// Write a function called 'keyValue' which takes two arguments and returns a 
// new object with a key of the first argument and the value of the second 
// argument.

// keyValue('city', 'Denver') should return Object {city: "Denver"}

function keyValue(key, value) {
    var keyvalpair = {}
    keyvalpair[key] = value;
    return keyvalpair;
}
console.log(keyValue('city','Denver'));