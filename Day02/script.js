// Activities 1:  Arithmetic Operation

const SumTwoNumber = (num1, num2) => {
    if(Number.isInteger(num1) && Number.isInteger(num2)){

        console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}`);
    }else{
        console.log(`Please add write value`)
    }
}

// SumTwoNumber('dd', 25);

const SubTwoNumber = (num1, num2) => {
    if(Number.isInteger(num1) && Number.isInteger(num2)){

        console.log(`The Substation of ${num1} and ${num2} is: ${num1 - num2}`);
    }else{
        console.log(`Please add write value`)
    }
}

// SubTwoNumber(55,23)

const MultiplyTwoNumber = (num1, num2) => {
    if(Number.isInteger(num1) && Number.isInteger(num2)){

        console.log(`The multiplication of ${num1} and ${num2} is: ${num1 * num2}`);
    }else{
        console.log(`Please add write value`)
    }
}

// MultiplyTwoNumber(5, 23)

const DivideTwoNumber = (num1, num2) => {
    if(Number.isInteger(num1) && Number.isInteger(num2)){

        console.log(`The multiplication of ${num1} and ${num2} is: ${num1 / num2}`);
    }else{
        console.log(`Please add write value`)
    }
}

// DivideTwoNumber(100, 50)


const ReminderTwoNumber = (num1, num2) => {
    if(Number.isInteger(num1) && Number.isInteger(num2)){

        console.log(`The multiplication of ${num1} and ${num2} is: ${num1 % num2}`);
    }else{
        console.log(`Please add write value`)
    }
}

// ReminderTwoNumber(100  , 50)


// Activities 2:  Assignment Operators 

const plusOne = (a, b) => {
    let num = a;
    console.log(` Value of number before += operator ${num}`)
    num += b;
    console.log(` Value of number after += operator ${num}`)

}

// plusOne(10, 5)

const plusMinus = (a, b) => {
    let num = a;
    console.log(` Value of number before -= operator ${num}`)
    num -= b;
    console.log(` Value of number after -= operator ${num}`)

}

// plusMinus(55, 99)


// Activities 3 : Comparison Operator

const greaterThan = (a, b) => {
    if(a > b){
        console.log(`${a} is greater than ${b}`)
    }else if(a < b){
        console.log(`${a} is less than ${b}`)
    }else{
        console.log(`Add a suitable number`)
    }
}


// greaterThan(5, 8)

const greaterThanOrEqual = (a, b) => {
    if(a >= b){
        console.log(`${a} is greater than or equal to ${b}`)
    }else if (a <= b ){
        console.log(`${a} is less than or equal to ${b}`)
    }else{
        console.log(`Add a suitable number`)
    }
}

// greaterThanOrEqual(5 ,`k`)

const strictEqualComparison = (a, b) => {

    if(a === b){
        console.log(`${a} is  strictly equal to ${b}`)
    }else if (a == b){
        console.log(`${a} is  equal to ${b}`)
    }else{
        console.log(`${a} is not  equal to ${b}`)
    }
    
}

// strictEqualComparison(5, `5`)


// Activity 4: Logical Operations

const logicalAnd = (a, b) => {
    if(a && b){
        console.log(`Both ${a} and ${b} are true`)
    }else{
        console.log(`At least one of ${a} and ${b} is false`)
    }
}
// let alpha = 5 == '9'
// let beta = 5 === 5
// logicalAnd(alpha, beta)

const logicalOr = (a, b) => {
    if(a || b){
        console.log(`At least one of ${a} and ${b} is true`)
    }else{
        console.log(`Both ${a} and ${b} are false`)
    }
}
// let alpha = 5 == '9'
// let beta = 5 === 5
// logicalOr(alpha, beta)

const logicalNot = (a) => {
    if(!a){
        console.log(`${a} is false`)
    }else{
        console.log(`${a} is true`)
    }
}

// logicalNot((2 == 9))

//  Activity 5 :  Ternary Operator


const ternaryOperator = (a) => {
    
    a > 0 ? console.log(`Positive ${a}`) : console.log(`Negative ${a}`)
}

ternaryOperator(2)