function addNumbers(num1, num2) {
return num1 + num2
};

describe('addNumbers', () => {
    it('should add two numbers together', () => {
        expect(addNumbers(2, 5)).toBe(7);
    })
});



function twoStrings(a, b) {
return a.concat(b);
};


describe('twoStrings', () => {
    it('should concantenate two strings together', () => {
        expect(twoStrings('a','b')).toBe('ab')
    })
})



function arrayTest(array) {
    return array.length 
}

describe('arrayTest', () => {
    it('should check the length of an array', () => {
        expect(arrayTest([1, 2 , 3, 4])).toBe(4);
    })
});


function btnTest(count) {
const result = document.querySelector('button').addEventListener('click', () => {
   count++
})
document.querySelector('button').click()
return count;
}


describe('btnTest', () => {
    it('should increase count by one', () => {
        expect(btnTest(0)).toBe(1);
    })
});

// function isEven(num) {
    
// } 

// describe('isEven', () => {
//     it('should return true if number is even', () => {

//     })
// })





