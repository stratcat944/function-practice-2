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

// function keyValue(key, value) {
//     var keyvalpair = {}
//     keyvalpair[key] = value;
//     return keyvalpair;
// }
// console.log(keyValue('city','Denver'));


// 4. Negative Index
// *********************************************

// Write a function called 'negativeIndex' which takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num.
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) should return 'd'
// negativeIndex(['jerry', 'sarah', 'sally'], -1) should return 'sally'

// var pets = ['Peanut', 'Ernie', 'Andy', 'Hutch', 'Gettie', 'Alex', 'Nelly']

// var negativeIndex = function(arr, negNum) {
// 	return arr[arr.length + negNum]
// }
// console.log(negativeIndex(pets, -4));