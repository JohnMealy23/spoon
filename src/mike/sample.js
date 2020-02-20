//
//const array1 = [
//    'Mike'
//    'Emily'
//    'Sara'
//]
//
//const makeHello = (x) => {
//    console.log('Hello ${x}!')
//}
//
//array1.forEach(makeHello)

/*
const countDown = (remaining) => {
    console.log(`${remaining} left to go!`)
    if (remaining !== 0) {
        remaining = remaining - 1
        countDown(remaining)
    }
}
countDown(50)

/*
countdown = remaining
remaining = starting with ten, 
any number greater than 0 will have 1 subtracted from it
*/


//const declares getRandomBoolean always
//equals Math.random function
//equals 50%

/*
const getRandomBoolean = (probability) => {
    const randomNumber = Math.random()
    const spoonCat = randomNumber >= probability;
    return spoonCat
}
const result1 = getRandomBoolean(.60)
const result2 = getRandomBoolean(.15)
console.log(result1, result2);

//passes function of getRandomBoolean

console.log(getRandomBoolean);



//const getRandomBoolean = () => {
//    const x = Math.random() >= 0.5;
//    return x
//}

//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())
//console.log(getRandomBoolean())



//const getRandomBoolean = (thisnumber) => {
//    if (thisnumber % 2 === 0) {
//        return false;
//    } else {
//        return true;
//    }
//}
//const trueorfalse1 = getRandomBoolean(2)
//const trueorfalse2 = getRandomBoolean(2)
//const trueorfalse3 = getRandomBoolean(2)
//const trueorfalse4 = getRandomBoolean(2)
//console.log({
//trueorfalse1,
//trueorfalse2,
//trueorfalse3,
//trueorfalse4,
//})



const adjustableTrue = (probability) => {
        if (results < 30) {
        return false;
    } else {
        return true;
    }
}

console.log(probability)

// What follows is a unit test.  Don't touch anything below this line!
// It'll run your function 100 times, and you can check if the number of
// trues is as intended - around ~30% of the whole, in this case.
const percentTrue = 30
const results = { trues: 0, falses: 0 }
for (let i = 0; i < 100; i++) {
    const result = adjustableTrue(percentTrue)
    if (result === true) {
        results.trues++
    } else if (result === false) {
        results.falses++
    }
}
console.log({ results })
*/

/*
const arr = ['back', 'oh', 'yah']
const callback = (acc, item) => {
    const sum = acc + ' ' + item
    return sum
}
const result = arr.reduce(callback, 'backstreet')
console.log(result)
*/
/*
const foodArray = [
    {
        food: 'hamburger',
        acceptableCondiments: [
            'mayo',
            'mustard',
            'relish',
            'cheese',
        ],
    },
    {
        food: 'baked potato',
        acceptableCondiments: [
            'butter',
            'sour cream',
            'cheese',
            'chives',
        ],
    },
    {
        food: 'tacos',
        acceptableCondiments: [
            'salsa',
            'sour cream',
            'cheese',
            'gauc',
        ],
    },
    {
        food: 'condiment soup',
        acceptableCondiments: [
            'mayo',
            'mustard',
            'relish',
            'butter',
            'chives',
            'salsa',
            'sour cream',
            'cheese',
            'gauc',
        ],
    },
]

//The foodNames parameter should be an array of all of the 
// food names in foodArray.
//The allCondiments parameter should be an array of all 
// of the condiments in foodArray, with redundancies.

/*
const callback = (acc, item) => {
    const foodName = item.food
    acc.push(foodName)
    return acc
}

const array2 = []
const result = foodArray.reduce(callback, array2)
console.log(result)

const callback2 = (acc, item) => {
    const condimentName = item.acceptableCondiments
    acc.push(condimentName)
    return acc
}

const array3 = []
const result2 = foodArray.reduce(callback2, array3)
const result3 = result2.flat()
console.log(JSON.stringify(result3, null, 4))
*/

const foodArray = [
    {
        food: 'hamburger',
        acceptableCondiments: [
            'mayo',
            'mustard',
            'relish',
            'cheese',
        ],
    },
    {
        food: 'baked potato',
        acceptableCondiments: [
            'butter',
            'sour cream',
            'cheese',
            'chives',
        ],
    },
    {
        food: 'tacos',
        acceptableCondiments: [
            'salsa',
            'sour cream',
            'cheese',
            'gauc',
        ],
    },
    {
        food: 'condiment soup',
        acceptableCondiments: [
            'mayo',
            'mustard',
            'relish',
            'butter',
            'chives',
            'salsa',
            'sour cream',
            'cheese',
            'gauc',
        ],
    },
]
/*
Remember how we learned to make DOM elements with things like document.createElement, 
element.innerText, and document.body.appendChild?  Let's do that again.  But this time, 
we're going to user foodArray.
* Loop through foodArray.
* For every food parameter, insert the value inside of a h2 tag.
* Under each h2 tag, create an unorganized list, and insert each acceptableCondiments item in that unorganized list as a list item.
*/

const justTheFood = foodArray.map((menuItem) => {
    const foodName = menuItem.food
    const h2a = document.createElement("h2"); 
    h2a.innerText = foodName
    document.body.appendChild(h2a)

    const condimentNames = menuItem.acceptableCondiments
    const ul = document.createElement("ul");
    document.body.appendChild(ul)
    condimentNames.forEach(condiment => {
        const li = document.createElement("li");
        li.innerText = condiment
        ul.appendChild(li)
    });
});

const h1 = document.createElement("h1"); 
const t1 = document.createTextNode(justTheFood); 

h.appendChild(t1);  
document.body.appendChild(h1);

const justTheCondiments = foodArray.map(menuItem => menuItem.acceptableCondiments);

const h2 = document.createElement("h2"); 
const t2 = document.createTextNode(justTheCondiments); 

h.appendChild(t2); 
document.body.appendChild(h2);