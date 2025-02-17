import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

console.log('converts cents to dollar');

if (formatCurrency(2095) === '20.95') {
    console.log('sure does I just oiled it');
} else {
    console.log('failed');
};

console.log('works with 0');

if (formatCurrency(0) === '0.00') {
console.log('it passed')
} else {
    console.log('hell nah')
};

console.log('rounds up to nearest cent')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed')
} else {
    console.log('failed')
};

// generally two cases- basic and edge cases (lul edge)
