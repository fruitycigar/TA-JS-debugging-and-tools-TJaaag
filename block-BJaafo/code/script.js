// function fullName (firstName = '', lastName = '') {
//     return firstName + ' ' + lastName;
// }

// result = fullName(`Sridhar`, `Vembu`);

// expected = "SridharVembu";

// if (result !== expected) {
//     throw new Error(`${result} is not the same as ${expected}.`)
// }

// result2 = fullName(`Sridhar`, `Vembu`);

// expected2 = "Sridhar Vembu";

// if (result2 !== expected2) {
//     throw new Error(`${result2} is not the same as ${expected2}.`)
// }

function calcTax (amount = '0', taxRate = '0') {
    return amount + (amount*taxRate);
}

result = calcTax(100, 0.1);
expected = 109;

if (result !== expected) {
    throw new Error(`${result} is not the same as ${expected}.`)
} 

result2 = calcTax(100, 0.1);
expected2 = 110;

if (result2 !== expected2) {
    throw new Error(`${result2} is not the same as ${expected2}.`)
} 