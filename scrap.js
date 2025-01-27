// console.log(document);

// const el = document.querySelector('#my-div');
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn');

// btn.addEventListener("click", btnHandler);

// function btnHandler() {
//     const list = el;
//     const newItem = document.createElement("li");
//     list.appendChild(newItem);
//     newItem.textContent = input.value;
//     input.value = "";
// }

// console.log(input);

// const car = {
// make: "Ford",
// model: "Ranger",
// year: "1995",
// getInfo: function () {
//     console.log(`The car is ${this.year} ${car.make} ${car.model}`)
// }
// }

// car.getInfo();

// const student = {
//     name: 'Luciel',
//     age: 25,
//     grades: [40, 67, 70, 40],
    
// }

// function calculateGrade(grades) {
//         let total = 0;
//         let amountOfGrades = grades.length;
//         console.log("Total: ", total);
//         console.log("amountOfGrades", amountOfGrades);

//         for (let index = 0; index < grades.length; index++)
//         {
//             let currentIndex = grades[index]
//             console.log(currentIndex);
//             total += currentIndex
//         }
//         console.log(total / amountOfGrades) 
//     }

// calculateGrade([40, 67, 70, 40])

// const el = document.querySelector('#my-div');
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn');

// btn.addEventListener('click', function(){
//     console.log(el);
//     el.style.backgroundColor = 'red';
// })

// let changePara = document.getElementById('changePara');
// let changeBtn = document.getElementById('changeBtn');

// changeBtn.addEventListener("click", function(){
//     changePara.textContent = "Hello!";
// })

// const el = document.querySelector('#my-div');
// const input = document.querySelector('#input');
// const btn = document.querySelector('#btn');

// btn.addEventListener

const btn = document.querySelector('#btn');

btn.addEventListener("click", function(){
    const ul = document.querySelector('ul');
    const newItem = document.createElement("li");
    ul.appendChild(newItem)
    newItem.textContent = "hi";
})