// ====== Exercise #1 ====== //
// Write a function that parses through the below object and displays all of their favorite food dishes as shows:
/* let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco Bell",
    burgers: "Portillas Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt" 
    }]
} */

function displayFavoriteFoods(person) {
    for (let food in person) {
        if(Array.isArray(person[food])) {
            console.log('${food}: ${person[food].join(",")}');
        } else if (typeof person[food] === 'string') {
            console.log('${food}: ${person[food]}');
        } else if (typeof person[food] === 'object') {
            for (let store in person[food] [0]) {
                console.log('${store}: ${person[food] [0] [store]}');
            }
        }
    }
}
let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco Bell", 
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt" 
    }]
};
displayFavoriteFoods(person3);

// ====== Exercise #2 ====== //
// Write an object prototype for a Person that has a name and age, has a printInfo method, and also has a method
// that increments the persons age by 1 each time the method is called. Create two people using the 'new' keyword, and 
// print both of their infos and increment one persons age by 3 years. Use arrow function for both methods. 

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.printInfo = () => {
    console.log('Name: ${this.name}, Age: ${this.age}');
}

Person.prototype.addAge = (years) => {
    this.age += years;
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.printInfo();
person2.printInfo();

person1.addAge(3);

person1.printInfo();
person2.printInfo();

// ====== Exercise #3 ======//
// Create a Promised based function that will check a string to determine if it's length is greater than 10. 
// If the length is greater than ten console log "Big Word". 
// If the length of the string is less than 10 console log "Small Number". 

function checkStringLength(string) {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number")
        }
    });
}

//Example usage
const inputString = "Hello, World!";
checkStringLength(inputString).then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});

// ====== CodeWars Problems and Solutions ====== //

// Cats and Shelves -- 7kyu //
// Input: Start and finish shelf numbers (always positive integers, finish no smaller than start). 
// Task: Find the minimum number of jumps to go from start to finish. 

function solution(start, finish) {
    var diff = finish - start;
    return Math.floor(diff/3) + (diff%3);
}

// Example: Start 1, Finish 5 -- Answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

// Stringy String -- 8kyu //
function stringy(size) {
    var str = '';

    for (var i = 1; i <= size; i++) {
        // Loop by starting with 1 until you get to size number
        str = str + i%2;
        // If 1 is less than or equal to size, 
        string = str + 1%2; // which is 1 //
        // If 2 is less than or equal to size, 
        string = str + 1%2; // which is 0 //
    }
    return str;
}

// Printer Errors -- 7kyu //
// Write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator
// is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression. 
// The string has a length greater or equal to one and contains only lettersf from a to z. 

function printerErrors(s) {
    var passingLetters = ("abcdefghijklm").split("");
    var a = s.length;
    var i = 0;
    var count = 0;

    while (i < a) {
        if(passingLetters.indexOf(s[i]) = count++);
    }
      i++;
    }
    return (count + "/" + a);

// You Can't Code Under Pressure! --8kyu //
// Under Pressure #1
// Code as fast as you can! You need to double the integer and return it. 
function doubleInteger(i) {
    // i will be an integer. Double it and return it. 
    return i * 2;
}
// Under Pressure #2
function isNumberEven(i) {
    // i will be an integer. Return true if it is even, false otherwise. 
    return i % 2 === 0;
}
// Under Pressure #3
function getFileExtension(i) {
    // i will be a string, but it may not have a file extension, return the file extension (with no period) if it has one, otherwise false. 
    var result = i.split('.');
    return result.length > 1 ? result.pop():false;
}
// Under Pressure #4
function longestString(i) {
    // i will be an array. Return the longest string in the array. 
    var longest = '';
    if (Array.isArray(i)) {
        var a = i.filter(function(t) {
            return typeof t === 'string';
        }).forEach(function(t) {
            if (t.length > longest.length) {
                longest = t;
            }
        });
        return longest;
    }
}
// Under Pressure #5
function arraySum(i) {
    // i will be an array, containing integers, strings, and/or arrays like itself. Sum all the integers 
    // you find, anywhere in the nest arrays. 
    var sum = 0;
    if (Array.isArray(i)) {
        for (var n=0; len = i.length; n < len); ++n; {
            if (Array.isArray(i[n])) {
                sum += arraySum(i[n]);
            }
            else if (typeof i[n] === 'number') {
                sum += i[n];
            }
        }
    }
    return sum;
}

