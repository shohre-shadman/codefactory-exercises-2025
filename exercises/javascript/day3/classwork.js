let fruits= ["apple" , "banana", "orange", "grape"]   // Create an array named fruits

console.log(fruits[0]) // Outputs: apple
console.log(fruits.length)  //length of the fruits

let players=["Martin", "Thomas" , "Peter", "Mathias", "Niki"]
let thirdPlayer = players[2];  //// Get the third player
console.log("The most valuable player of the match is " + thirdPlayer);  //// Log the message to the console


function crystalGazer(children, partner, location, job)
{console.log(`You will be a ${job} in ${location}, married to ${partner} with ${children} children.`);
}

// Example usage:
crystalGazer(1, "Mojtaba", "Wien", "web developer");

let fruitslist=['apple', 'banana', 'kiwi', 'mango', 'pear'];  // Initial array

fruitslist.push('orange');  //add one more item to end of the list
console.log(fruitslist);

fruitslist.shift('apple');  // Remove the first item ('apple')
console.log(fruitslist)

fruitslist.unshift('apple')
console.log(fruitslist)

fruits.pop('orange');  // Remove the last item from the array
console.log(fruitslist)

fruitslist.shift('apple')   //remove first item
console.log(fruitslist)

fruitslist.unshift('strawberry')  //add first items
console.log(fruitslist)

let animals=['monkey', 'horse', 'dog', 'elephant', 'giraffe']
console.log(animals)

animals.shift('monkey')  //remove first item
console.log(animals)

animals.unshift=('cat')  //add first item
console.log(animals)

animals.pop=('giraffe')  //remove last item
console.log(animals)

animals.push=('tiger')   //add last item
console.log(animals)

animals.reverse()
console.log(animals)

let people=["Greg" , "Mary" , "Devon" , "James"]
console.log(people)

people.shift('Greg')  //remove first item
console.log(people)


people.push('Matt')  //add one item to the front
console.log(people)


people.pop('James')  //remove last item
console.log(people)

people.push('shohreh')  //add my name to the end of the array
console.log(people)









function ageCalculator(birthYear, currentYear) {
    // Calculate the age if the person has already had their birthday this year (Option 1)
    let ageOption1 = currentYear - birthYear;

    // Calculate the age if the person hasn't had their birthday yet this year (Option 2)
    let ageOption2 = ageOption1 - 1;

    // Return the result in the desired format
    return `You are either ${ageOption1} or ${ageOption2}.`;
}

// Example usage:
let result = ageCalculator(1991, 2025);
console.log(result);  // Output: "You are either 30 or 29."





