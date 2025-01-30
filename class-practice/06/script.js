// function calculateDiscount(price, discountRate = 0.1) {
//             console.log(`Discount: ${price * discountRate} Final Price: ${price - (price * discountRate)} `)

// }
// console.log('hello');

// calculateDiscount(100);
// calculateDiscount(200,0.2);
// calculateDiscount(200,0.2);

// function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) {
//     let discount = (price*100) /(discountRate*100);
//     let finalPrice = (price*100) - discount;
//     let tax = (taxRate*100) / finalPrice;

//     console.log(`Original Price: $${price/100} `);
//     console.log(`Discount: $${(discount/100)}`);
//     console.log(`Tax $${(tax/100).toFixed(2)}`);
//     console.log(`Final Price: $${(finalPrice/100).toFixed(2)}`)
// }
// calculateFinalPrice(100);
// calculateFinalPrice(200, 0.2, 0.1);

// let username = "admin";
// let password = "password123";

// if (username == "admin") {
//     if (password == "password123") {
//         console.log('Access granted!');
//     } else {
//         console.log('Incorrect password.')
//     } 
// } else {
//     console.log('Unknown user.')
// }

// if (username == "admin" && password == "password123") { console.log('Access granted!')
// } else {
//     console.log('Access denied!!!!!!!!!!');
// }


// function checkDrive (age, hasLicense) {
//     if (age >= 18 && hasLicense) {
//             console.log("You can drive.");
//         }
//         else if (age>=18 && !hasLicense) {
            
//             console.log("You NEED license.");
//         }
//         else (age<=17) 
//             console.log('You are not old enough to drive');
//         }
    

//     checkDrive(18, true)


// function square(number) {
//         console.log(number * number);
// }

// square(5);
// square(7);
// square(10);

// let isWeekend = true;
// let isHoliday = true;

// function offWork(isWeekend, isHoliday) {
//     if(isWeekend || isHoliday) {
//         console.log("You can relax today!");
//     }
//     else {console.log("It is workday.")};
// }

// function greet(name) {
//     console.log("Hello, ${name}! Welcome to JavaScript class")
// }

// offWork(true, true);



function greet(name) {
    console.log(`Hello, ${name}! Welcome to Javascript class.`);
}

greet("Lucy");











