var cars = ['Audi', 'Mercedes', 'BMW'];
console.log(cars);

// Метод pop()

cars.pop();
console.log(cars);

// Метод push()

cars.push('Opel');
console.log(cars);

// Метод shift()

cars.shift();
console.log(cars);

// Метод unshift()

cars.unshift('Volkswagen');
console.log(cars);

// Метод join()

var str = cars.join(',');
console.log(str);

// Метод split()

var cars_2 = str.split(',', 2);
console.log(cars_2);

// Метод splice()

cars.splice(1, 0, 'Volvo', 'Jaguar');
console.log(cars);

// Метод slice()

var cars_3 = cars.slice(1, 3);
console.log(cars_3);

// Метод concat()

var cars_4 = cars_2.concat(cars_3);
console.log(cars_4);

// Метод reverse()

cars_4.reverse();
console.log(cars_4);

// Метод indexOf()

console.log( cars.indexOf('Volkswagen') ); // номер элемента 0
console.log( cars.indexOf('Jaguar') ); // номер элемента 2
console.log( cars.indexOf('LADA') ); // такого элемента нет в массиве, значит -1


// ПЕРЕБИРАЮЩИЕ МЕТОДЫ!!!!!!!!!

// Метод forEach()

cars.forEach(function(item, i, arr) {
	console.log( i + ": " + item + " (массив:" + arr + ")" );
});

// Метод filter()

var wordLength = cars.filter(
	(function (item) {
		return item.length > 5;
	})
);
console.log( wordLength );

// Метод map()

var carNameLengths = cars.map(function(name) {
	return name.length;
});
console.log( carNameLengths );

var firstLetter = cars.map(function(name) {
	return name.charAt(0);
});
console.log( firstLetter );

// Метод find()

function searchCar(word){
	if( word.length > 4 && word.length < 6 ) {
		return true;
	}	else {
		return false;
	}
}

var el = cars.find( searchCar );
console.log( el );