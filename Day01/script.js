// console.log(`Hello`)

// Activity One

const activityOne = () => {
    var one = 21;
    let two = 'Hello I am two';
    console.log(`one`, one)
    console.log(`two`, two)
}

// activityOne()

// Activity Two

const activityTwo = () => {
    const three = true
    console.log(`three`, three);
}

// activityTwo()

// Activity Three

const activityThree = () => {
    let num = 3;
    let str = `I am a string`;
    let bool = true;
    let obj = {};
    let arr = [];


    console.log(`Number:- `, typeof (num))
    console.log(`String:- `, typeof (str))
    console.log(`Boolean:- `, typeof (bool))
    console.log(`Object:- `, typeof (obj))
    console.log(`Array:- `, typeof (arr))
}

// activityThree()

// Activity Four

const activityFour = () => {
    let num = 52;
    console.log(`Initial value of num ${num}`)

    num = 98;
    console.log(`Reassigned value of num ${num}`)
}

// activityFour()


const activityFive = () => {
    const num  = 52;

    num = 88;
};

// activityFive()

// Feature one

const featureOne = () => {
    let num = 3;
    let str = `I am a string`;
    let bool = true;
    let obj = {
        key1: 'value1',
        key2: 'value2',
        key3: true
    };
    let arr = [12,454, 'one', `two`, true , [5, 4], {}];


    console.log(`Number:-  ${num}  and type is`, typeof (num))
    console.log(`String:-  ${str} and type is`, typeof (str))
    console.log(`Boolean:- ${bool}  and type is`, typeof (bool))
    console.log(`Object:- ${obj}  and type is`, typeof (obj))
    console.log(`Array:-  ${arr} and type is`, typeof (arr))
}

featureOne();
//  Feature two

const featureTwo = () => {
   let value1 = 42;
   const value2 = 12;
   

   console.log(`Value of let ${value1}`)
   console.log(`Value of const ${value2}`)

   value1 = 84;
   value2 = 24;
   console.log(`Value of let after resigned ${value1}`)
   console.log(`Value of const after resigned ${value2}`)
}

// featureTwo()