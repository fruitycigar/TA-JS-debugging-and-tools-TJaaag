function addNum(numA = 0, numB = 0) {
    return numA + numB;
}

let result, expected;

function test(message, cb) {
    try {
        cb();
        console.log('✅', message);
    } catch (error) {
        console.error(error);
        console.log('❌', message);
    }
}

function testAddOne() {
    result = addNum(true, 2);
    expected = 'number';
    if (typeof numA !== expected || typeof numB !== expected) {
        throw new Error(`One of the arguments is not of the number data type.`)
    }
}

test(`Adding true and 2 to get an error message.`, testAddOne);

function testAddTwo() {
    result = addNum(3, 2);
    expected = 'number';
    if (typeof numA !== expected || typeof numB !== expected) {
        throw new Error(`One of the arguments is not of the number data type.`)
    }
}

test(`Adding 3 and 2 to get number.`, testAddTwo);

function testAddThree() {
    result = addNum(8, 2);
    expected = 'number';
    if (typeof numA !== expected || typeof numB !== expected) {
        throw new Error(`One of the arguments is not of the number data type.`)
    }
}

test(`Adding 8 and 2 to get number.`, testAddThree);

function testAddFour() {
    result = addNum(1, 5);
    expected = 'number';
    if (typeof numA !== expected || typeof numB !== expected) {
        throw new Error(`One of the arguments is not of the number data type.`)
    }
}

test(`Adding 1 and 5 to get number.`, testAddFour);

function testAddFive() {
    result = addNum(2, 2);
    expected = 'number';
    if (typeof numA !== expected || typeof numB !== expected) {
        throw new Error(`One of the arguments is not of the number data type.`)
    }
}

test(`Adding 2 and 2 to get number.`, testAddFive);