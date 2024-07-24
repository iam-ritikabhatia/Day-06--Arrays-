//  Create an array from 1 to 5 & console them

 let numbers = [1, 2, 3, 4, 5];
console.log(numbers);


// Create an  array access the first element & last element

let array = [1, 2, 3, 4, 5];
let firstElement = array[0];
let lastElement = array[array.length-1];

console.log("First element :", firstElement);
console.log("last element:", lastElement);




// .push 

let fruits = ["Apple, Mango, Grapes, Orange"];
fruits.push('Kiwi');
console.log(fruits);




// pop

let vegetables = ["Tomato, Potato, Peas, BottleGourd"];
let freshVegetables = vegetables.pop();
console.log("Removed fresh vegetable:", freshVegetables);
console.log("Updated vegetables:", vegetables);  // Note : output is empty array. This is because vegetables initially contains one string, and after using pop, that string is removed, leaving the array empty.



// or


// let array = [1, 2, 3, 4, 5];
// let lastElement = array.pop();
// console.log("Removed last Element:", lastElement);
// console.log("updated array:", array);


//  use shift method to remove the element

// let array = [1, 2, 3, 4, 5];
// let firstElement = array.shift();
// console.log("Removed first element:", firstElement);
// console.log("Updated array:", array);



//  use unshift method to add the element in the begining

let arr = ["Potato, Tomato, BottleGourd"];
array.unshift("Peas");
console.log("updated array:", arr);


// Map

let age = [1, 2, 3, 4];
let doubleAge = age.map(num => num * 2);
console.log("Doubled age: ", doubleAge);




//  filter method
let arra = [1, 2, 3, 4, 5];
let evenArray = arra.filter(num => num % 2 === 0);
console.log("Even array:", evenArray);





// reduce method

let method = [1, 2, 3, 4, 5];
let sum = method.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers :", sum);





// use for loop to iterate over the array & log the element to the console.

let arrays = [1, 2, 3, 4, 5];
for(let i = 0; i< arrays.length; i++){
    console.log(arrays[i]);
}


// for Each

let arrayI = [1, 2, 3, 4, 5];
array.forEach(element => {
    (console.log(element))});



// create a two dimensional array(matrix) and log to the console

let matr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];
console.log("Matrix");
console.log(matr);



// Access and log specific elements from 2d array dimensional 

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let specificElement = matrix[1][2];
console.log("specificElement:", specificElement);

