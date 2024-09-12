// Activity 1

const CheckNumber = (num) => {
    if (num > 0) {
        console.log(`${num} is a positive number`);
    } else if (num < 0) {
        console.log(`${num} is a negative number`);
    } else if (num === 0) {
        console.log(`${num} is zero`);
    } else {
        console.log(`Please enter a valid number`);
    }
}

// CheckNumber(5)

const CheckVotingRights = (age) => {
    if (age >= 18) {
        console.log(`You are eligible to vote`);
    } else if (age < 18) {
        console.log(`You are not eligible to vote. Your age is ${age}`);
    } else {
        console.log(`Please enter a valid age`);
    }
}

// CheckVotingRights('dd')

// Activity 2

const CompareThreeNumbers = (a, b, c) => {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        if (a > b && a > c) {
            console.log(`${a} is grater than ${b} and ${c}`)
        } else if (b > a && b > c) {
            console.log(`${b} is grater than ${a} and ${c}`)
        } else {
            console.log(`${c} is grater than ${a} and ${b}`)
        }

    } else {
        console.log(`Please enter valid numbers`);
    }
};
// CompareThreeNumbers(9,6,99)


// Activity 3

const CheckWeekDay = (day) => {
    switch (day) {
        case 1:
            console.log(`Sunday`)
            break;
        case 2:
            console.log(`Monday`)
            break;

        case 3:
            console.log(`Tuesday`)
            break;

        case 4:
            console.log(`Wednesday`)
            break;
        case 5:
            console.log(`Thursday`)
            break;
        case 6:
            console.log(`Friday`)
            break;
        case 7:
            console.log(`Saturday`)
            break;

        default:
            console.log(`Please Provide a suitable Number`)
            break;
    }
}

// CheckWeekDay(7)

const GradeAssignment = (mark) => {
   if(mark > 0 && mark < 100){
    switch (true) {
        case (mark > 90):
            console.log(`Grade assignment A ${mark}`)
            break;
        case (mark > 80):
            console.log(`Grade assignment B ${mark}`)
            break;
        case (mark > 70):
            console.log(`Grade assignment C ${mark}`)
            break;
        case (mark > 60):
            console.log(`Grade assignment D ${mark}`)
            break;
        case (mark > 50):
            console.log(`Grade assignment E ${mark}`)
            break;
        case (mark > 40):
            console.log(`Grade assignment F ${mark}`)
            break;

        default:
            break;
    }
   }else{
    console.log(`Please provide a suitable number ${mark}`)
   }
}

// GradeAssignment(66)

const OddEven = (num) => {
    num % 2 == 0 ? console.log(`${num} is Even`) : console.log(`${num} is odd `)
}

// OddEven(5)

const CalenderChecker = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

CalenderChecker(2024)