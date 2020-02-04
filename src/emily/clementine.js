// console.log("toddler clementine")

// alert('hello there')

// const adjustableTrue = (probability) => {
//     const randomNumber = Math.random() * 100;
//     console.log(randomNumber)
//     if (randomNumber <= probability) {
//         return true
//     }
//     else {
//         return false
//     }
// }



// const percentTrue = 30
// const results = { trues: 0, falses: 0 }
// for (let i = 0; i < 100; i++) {
//     const result = adjustableTrue(percentTrue)
//     if (result === true) {
//         results.trues++
//     } else if (result === false) {
//         results.falses++
//     }
// }

// console.log({ results })

// const myLabel = document.createElement('div')

// myLabel.innerText = "Hello Friends!"


// const myCallback = () => {
//     document.body.appendChild(myLabel)
// }

// setInterval(myCallback, 2000)

// var myInput = document.createElement('input');
// const yellIt = () => {
//     let userInput = myInput.value;
//     alert(userInput);
// }

// var myButton = document.createElement('button');
// myButton.innerText = 'did I do this right?'
// myButton.addEventListener('click', yellIt)

// document.body.appendChild(myInput)
// document.body.appendChild()

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


const isThereSourCream = (condiment) => {
    return condiment === 'sour cream'
}

const lookForSourCream = (itemInFoodArray) => {
    return itemInFoodArray.acceptableCondiments.find(isThereSourCream)
}

const weOnlyHaveSourCream = foodArray.filter(lookForSourCream)
