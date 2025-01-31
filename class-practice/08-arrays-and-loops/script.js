// console.log('connected');

// function todoList (todoItems, newItem) {
//     todoItems.push(newItem);
//     todoItems.shift()
//     console.log(todoItems);
// } 

// todoList(['do dishes', 'make bed', 'make dinner'], "do laundry");

// create function that finds largest number in an array
// create function 
// store array in variable
// create loop 
// find largest number
// log result

function largeNumber (myArray) {
    let highestNumber = 0;

for (let i = 0; i < myArray.length; i++) {

    let currentNumber = myArray[i];

    
    if (currentNumber > highestNumber) {
        highestNumber = currentNumber
        console.log(currentNumber);
    }
}
console.log(highestNumber)
}

largeNumber([1, 2, 3, 4, 5, 200, 100, 500])