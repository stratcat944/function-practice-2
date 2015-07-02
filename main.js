var getName = function(person) {

	return person.name;
	// or
	// return person['name']

}

console.log(getName({ name: 'Luisa', age: 25 }))