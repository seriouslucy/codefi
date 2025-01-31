
// const iBtn = document.querySelector("#increment-btn");
// const counterPlace = document.querySelector('#count-place')

// iBtn.addEventListener("click", incrementHandler)

// let count = 0;


// function incrementHandler() {
   
//    count++
//    console.log(count)
//     counterPlace.textContent = count;
// }

// const dBtn = document.querySelector("#decrement-btn");

// dBtn.addEventListener("click", decrementHandler)

// function decrementHandler() {
//     count--
//     console.log(count)
//     counterPlace.textContent = count;
// }

// const quotes = [
//     "hehehe",
//     "hahaha",
//     "wehehe"
// ];

// const btn = document.querySelector("#btn")
// const p = document.querySelector('#p')

// btn.addEventListener("click", clickHandler)

// function clickHandler() {
//     let randomNumber = Math.floor(Math.random() * quotes.length)

//     console.log(quotes[randomNumber]);
//     p.textContent = quotes[randomNumber];
    
// }

// alert('Welcome to my Webpage!')

const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const image1 = document.querySelector("img") 

const images = [
    'images/bunny.jpg',
    'images/kitty.jpg',
    'images/catonputer.png'
];



btn1.addEventListener("click", bunnyHandler)
btn2.addEventListener("click", kittyHandler)

function bunnyHandler() {
console.log('connected')
let randomIndex = Math.floor(Math.random() * images.length)
image1.src = images[randomIndex];
}


function kittyHandler() {
console.log('hello')
let randomIndex = Math.floor(Math.random() * images.length)
image1.src = images[randomIndex];
}

