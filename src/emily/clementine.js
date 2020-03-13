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

const justTheFood = foodArray.map((menuItem) => {
    //defining h2 title
    const foodName = menuItem.food
    // creating element to hold h2 in
    const h2 = document.createElement('h2');
    // em the 'h2' string after createElement is what tells it to make it an h2 tag, so don't fuck with it
    h2.innerText = foodName
    document.body.appendChild(h2)

    const condimentName = menuItem.acceptableCondiments
    const ul = document.createElement('ul');
    document.body.appendChild(ul)
    // 'ul' stands for unorganized list
    condimentName.forEach(condiment => {
        //forEach is a method, which takes one argument, a callback function (which in turn has 3 arguments)
        const li_condiment = document.createElement('li');
        li_condiment.innerText = condiment
        ul.appendChild('li')
        //appending pushes to DOM
    })
});

// const callback = (acc, item) => {
//     const foodName = item.food 
//     acc.push(foodName)
//     return acc
// }

// const foodsforh2tags = []
// const result = foodArray.reduce(callback, foodsforh2tags)
// console.log(result)

// foodsforh2tags.forEach(Functionh2) => {
//     h2{foodsforh2tags};
//     //okay I know this doesn't work, but my thinking is to somehow put each element of the foodsforh2tags array into a separate h2 tag

//     const callback = (acc, item) => {
//         const condimentsName = item.acceptableCondiments 
//         acc.push(condimentsName)
//         return acc
//     }
    
//     const unorganizedList = []
//     const result = foodArray.reduce(callback, unorganizedList)
//     console.log(result)
//     //is array different from list as we've been using them?
// }




// const callback = (acc, item) => {
//     const foodName = item.food 
//     acc.push(foodName)
//     return acc
// }

// const array = []
// const result = foodArray.reduce(callback, array)
// console.log(result)

// const callback2 = (acc, item) => {
//     const condiments = item.acceptableCondiments
//     return acc.concat(condiments)
// }

// const array2 = []
// const result2 = foodArray.reduce(callback2, array2)
// console.log(JSON.stringify(result2, null, 4))





 //   const isThereSourCream = (condiment) => {
 //       return condiment === 'sour cream'
 //   }

  //  const lookForSourCream = (itemInFoodArray) => {
 //       return itemInFoodArray.acceptableCondiments.find(isThereSourCream)
 //   }

//    const weOnlyHaveSourCream = foodArray.filter(lookForSourCream)



// const arr = [42, 5, 9, 2, 4, 5]
// const callback = (acc, item) => {
//     const remainder = item % 2
//     if (remainder === 1){
//         acc.push(item)
//     } 
//     return acc 
// }

// const array2 = []
// const result = arr.reduce(callback, array2)
// console.log(result)
